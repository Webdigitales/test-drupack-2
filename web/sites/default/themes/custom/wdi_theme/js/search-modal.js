(function ($, Drupal) {
    'use strict';
    const $searchBlock = $('.search-form');

    if (mobile) {
        moveSearchBlockInModal($searchBlock);
        closeModal();

        // If search page only
        if($('body').hasClass('path-jobs')) {
            getSelectedValues();
        }
    }

    /**
     * detach search block form mobile
     * @param element
     */
    function moveSearchBlockInModal(element) {
        var $modal = $('.js-search-modal');

        if (element.length > 0) {

            var $form = element.clone();
            $form.detach();

            if ($modal.length > 0) {
                var $modalContent = $modal.find('.modal-content');
                var $modalTrigger = $('#modal_trigger');

                $form.appendTo($modalContent);
                $form.children('#search-form').css('display', 'block');

                $modalTrigger.click(function () {
                    $modal.addClass('open');
                });
            }
        }
    }

    /**
     * Close modal
     */
    function closeModal() {
        var $closeModalTrigger = $('#modal_close');

        $closeModalTrigger.click(function () {
            var $modal = $(this).closest('#search_modal');
            $modal.toggleClass('open');
        });
    }

    function getSelectedValues() {
        var values = {};
        var inputText = '';
        var flag = false;

        var inputText = '';
        values['keywords'] = $('#search_modal #edit-keywords').val();
        values['discipline'] = $('#search_modal #edit-discipline').val();
        values['location'] = $('#search_modal #edit-location').val();

        $.each(values, function (index, value) {
            if (value != '') {
                if (flag) {
                    inputText += ' - ';
                }
                inputText += value;
                flag = true;
            }
        });

        $('#modal_trigger .trigger-text').html(inputText);

    }

})(jQuery, Drupal);

