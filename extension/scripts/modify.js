const projects = {
    'projectId': 'projectName'
};

setInterval(() => {
    let dropDownMenu = document.querySelectorAll('button.co-namespace-dropdown__menu-toggle > span.pf-c-menu-toggle__text');

    if (dropDownMenu.length > 0) {
        let text = dropDownMenu[0].innerHTML;
        let projectId = text.replace('Project: ', '')

        if (projects[projectId] != null) {
            dropDownMenu[0].innerHTML = text.replace(projectId, projectId + ' (' + projects[projectId] + ')')

        }
    }

    let dropDownMenuItems = document.querySelectorAll('ul.pf-c-menu__list > li.pf-c-menu__list-item > button.pf-c-menu__item > span > span');

    if (dropDownMenuItems.length > 0) {
        if (dropDownMenuItems.length > 0) {
            dropDownMenuItems.forEach(item => {
                let projectId = item.innerHTML;
                if (projects[projectId] != null) {
                    item.innerHTML = projectId + ' (' + projects[projectId] + ')';
                }
            });
        }
    }
}, 1000)