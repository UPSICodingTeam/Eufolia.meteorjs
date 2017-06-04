Accounts.config({ restrictCreationByEmailDomain: function(address) {
        return new RegExp('^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(upsi|UPSI)\.(edu|EDU)\.(my|MY)$', 'gm').test(address);
    }
});
