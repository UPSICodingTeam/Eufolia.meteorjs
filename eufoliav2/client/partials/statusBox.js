//Reference for infinitescrolling: http://www.meteorpedia.com/read/Infinite_Scrolling
newsfeed_increment = 3;
Session.setDefault('newsfeedLimit', newsfeed_increment);
Deps.autorun(function(){
  Meteor.subscribe('newnewsfeed', Session.get('newsfeedLimit'));
});

Template.statusBox.helpers({
  //Merging few collections into one template helper: https://stackoverflow.com/questions/21296712/merging-collections-in-meteor
  newsfeedList: function(){
    var limit = Session.get('newsfeedLimit');
    var hzstat = Status.find({}, {sort: {createdAt:-1}}).fetch();
    var hzsto = Story.find({}, {sort: {createdAt:-1}}).fetch();
    var hzles = Lesson.find({}, {sort: {createdAt:-1}}).fetch();
    var oneConcat = hzstat.concat(hzsto);
    var twoConcat = oneConcat.concat(hzles);
    var sortie = _.sortBy(twoConcat, function(doc, limit) {
      return doc.createdAt;
    });
    var ietros = sortie.reverse();
    return ietros; // reversed order.
  },
  formattedDate: function(){
    var timecreated = this.createdAt;
    return moment(timecreated).fromNow();
  },
  docfile: function(){
    return Documents.find();
  },
  docname: function(){
    return _.map(Documents.find().fetch(), function(x){
      return x.name;
    });
  },
  author: function(){
    return this.author;
  },
  youtube: function(){
    var content = this.status || this.story;
    //regex to identify Youtube link in status
    const parts = (/(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/([\w\=\-\?]+)/gm).exec(content)
    let mediaContent = ''

    if (parts && parts[3]) {
      let id = parts[3]

      if (id.indexOf('v=') > -1) {
        const subParts = (/v=([\w\-]+)+/g).exec(id)

        if (subParts && subParts[1]) {
          id = subParts[1]
        }
      }

      mediaContent = `http://www.youtube.com/embed/${id}`
    }
    var hzYoutube =  '<iframe src="'+ mediaContent +'?modestbranding=1&showinfo=0" type="text/html" frameborder="0" class="hz-iframe"></iframe>'
    if (mediaContent == ""){
      return "";
    } else {
      return hzYoutube;
    }
  },
  //Reference for infinitescrolling: http://www.meteorpedia.com/read/Infinite_Scrolling
  moreResults: function() {
    // If, once the subscription is ready, we have less rows than we
    // asked for, we've got all the rows in the collection.
    return !(Status.find().count() < Session.get("newsfeedLimit"));
  }
});

// whenever #showMoreResults becomes visible, retrieve more results
function showMoreVisible() {
    var threshold, target = $("#showMoreResults");
    if (!target.length) return;

    threshold = $(window).scrollTop() + $(window).height() - target.height();

    if (target.offset().top < threshold) {
        if (!target.data("visible")) {
            // console.log("target became visible (inside viewable area)");
            target.data("visible", true);
            Session.set("newsfeedLimit",
                Session.get("newsfeedLimit") + newsfeed_increment);
        }
    } else {
        if (target.data("visible")) {
            // console.log("target became invisible (below viewable arae)");
            target.data("visible", false);
        }
    }
}

// run the above func every time the user scrolls
$(window).scroll(showMoreVisible);
