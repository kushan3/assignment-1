$(function () {
    $('#photo-viewer').photoViewer().show().on('click', '.photo-box', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });
        //modal code goes here
        
        var modal = new Modal();
       

        modal.open({
            content: $content,
            width: 800,
            height: 470
        });
    });
});
class Modal {
    

    constructor() {
        this.$window = $(window);
        this.$modal = $('<div class="modal"></div>');
        this.$content = $('<div class="modal-content"/>');
        this.$close = $('<button role="button" class="modal-close">Close</button>');

        this.$modal.append(this.$content, this.$close);
        this.$close.on('click', (e) => {
            e.preventDefault();
            this.close();
        });
    }

    center() {
        // Distance from top and left to center of modal
        var top = Math.max(this.$window.height() - this.$modal.outerHeight(), 0) / 2;
        var left = Math.max(this.$window.width() - this.$modal.outerWidth(), 0) / 2;
        this.$modal.css({
            top: top + this.$window.scrollTop(),
            left: left + this.$window.scrollLeft()
        });
    }

    open(settings) { // settings contains content, width and height
        this.$content.empty().append(settings.content);
        this.$modal.css({                          // Dimensions
            width: settings.width ?? 'auto',    // Set width
            height: settings.height || 'auto'   // Set height
        }).appendTo('body');                  // Add to page
        this.center();                       // Call center() again 
        this.$window.on('resize', () => this.center()); // On window resize
    }

    close() {
        // Remove content from the modal window
        this.$content.empty();
        // Remove modal window from the page
        this.$modal.detach();
        // Remove event handler
        this.$window.off('resize');
    }
}