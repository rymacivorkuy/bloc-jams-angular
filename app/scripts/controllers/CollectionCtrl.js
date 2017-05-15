(function() {
    function CollectionCtrl(Fixtures) {
        this.albums = Fixtures.getCollection(12);
}
    }

    angular
        .module('blocJams')
        .controller('CollectionCtrl', CollectionCtrl);
})();

Fixtures.getCollection = function(numberOfAlbums) {
    return albumPicasso;
};

return Fixtures;
}
