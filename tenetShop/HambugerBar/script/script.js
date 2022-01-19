$(document).ready(function() {
    /*Report swap opacity changer*/
    $(".tenet-mobile-menu-pie").mouseover(function() {
        $(".tenet-mobile-menu-pie").addClass("fa-swap-opacity");
    });
    $(".tenet-mobile-menu-pie").mouseout(function() {
        $(".tenet-mobile-menu-pie").removeClass("fa-swap-opacity");
    });
    /*promotion swap opacity changer*/
    $(".tenet-mobile-menu-promotion").mouseover(function() {
        $(".tenet-mobile-menu-promotion").removeClass("fa-swap-opacity");
    });
    $(".tenet-mobile-menu-promotion").mouseout(function() {
        $(".tenet-mobile-menu-promotion").addClass("fa-swap-opacity");
    });
    /*logout swap opacity changer*/
    $(".tenet-mobile-menu-logout").mouseover(function() {
        $(".tenet-mobile-menu-logout").removeClass("fa-swap-opacity");
    });
    $(".tenet-mobile-menu-logout").mouseout(function() {
        $(".tenet-mobile-menu-logout").addClass("fa-swap-opacity");
    });
    /*Shop swap opacity changer*/
    $(".tenet-mobile-menu-shop").mouseover(function() {
        $(".tenet-mobile-menu-shop").addClass("fa-swap-opacity");
    });
    $(".tenet-mobile-menu-shop").mouseout(function() {
        $(".tenet-mobile-menu-shop").removeClass("fa-swap-opacity");
    });
});




(function() {
    'use strict';

    class Menu {
        constructor(settings) {
            this.menuRootNode = settings.menuRootNode;
            this.isOpened = false;
        }

        changeMenuState(menuState) {
            return this.isOpened = !menuState;
        }

        changeToggleHint(toggleHint, toggleNode) {
            toggleNode.textContent = toggleHint;
            return toggleHint;
        }
    }

    const menuClassesNames = {
        rootClass: 'menu',
        activeClass: 'menu_activated',
        toggleClass: 'menu__toggle',
        toggleHintClass: 'menu__toggle-hint'
    }

    const jsMenuNode = document.querySelector(`.${menuClassesNames.rootClass}`);
    const demoMenu = new Menu({
        menuRootNode: jsMenuNode
    });

    function getCurrentToggleHint(currentMenuState) {
        return (currentMenuState !== true) ? 'Open menu' : 'Close menu';
    }

    function toggleMenu(event) {
        let currentMenuState = demoMenu.changeMenuState(demoMenu.isOpened);
        let toggleHint = getCurrentToggleHint(currentMenuState);

        if(!currentMenuState){
            $(".tenet-mobile-menu-logo").addClass("tenet-mobile-menu-logo-anim")
            setTimeout(100)
        } else if(currentMenuState){
            $(".tenet-mobile-menu-logo").removeClass("tenet-mobile-menu-logo-anim")
            setTimeout(100)
        }

        demoMenu.changeToggleHint(
            toggleHint,
            demoMenu.menuRootNode.querySelector(`.${menuClassesNames.toggleHintClass}`)
        );
        demoMenu.menuRootNode.classList.toggle(`${menuClassesNames.activeClass}`);

        return currentMenuState;
    }

    jsMenuNode.querySelector(`.${menuClassesNames.toggleClass}`).addEventListener('click', toggleMenu);
})();