Template.statusBox.helpers({
  statuses: function(){
    return Status.find({}, {sort: {createdAt: -1}});
  },
  formattedDate: function(){
    var timecreated = this.createdAt;
    return moment(timecreated).fromNow();
  },
  author: function(){
    return this.author;
  },
  youtube: function(){
    var content = this.status;
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
  }
});
