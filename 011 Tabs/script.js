const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // get all the targets using data-attributes
        // any attribute starting with "data-" is a data attribute
        // "dataset" contains these data attributes
        // naming becomes in camelCase after removing the hyphens between the attribute's words
        // data-tab-target => dataset.tabTarget
        const target = document.querySelector(tab.dataset.tabTarget);

        // remove the active class from others
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
            // navTabs.classList.remove('active');
        })

        // add the active class to the tab clicked
        target.classList.add('active');
        
        tabs.forEach(navTab => {
            navTab.classList.remove('active');
        })

        tab.classList.add('active');
    })
})

