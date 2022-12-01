const projects = {
    'projectId': 'projectName'
};

setInterval(() => {
    let elements = document.querySelectorAll('button.co-namespace-dropdown__menu-toggle > span.pf-c-menu-toggle__text');

    if (elements.length > 0) {
        let text = elements[0].innerHTML;
        let projectId = text.replace('Project: ', '')

        if (projects[projectId] != null) {
            elements[0].innerHTML = text.replace(projectId, projectId + ' (' + projects[projectId] + ')')
        }

    }
}, 1000)