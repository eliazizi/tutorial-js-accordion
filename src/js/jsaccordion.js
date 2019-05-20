function JSAccordion(elementOrSelector) {
    if (!(this instanceof JSAccordion))
        return new JSAccordion(elementOrSelector);

    //  define public methods

    this.init = function () {
        this.targetElement.classList.add('jsac-container');
        var ulElement = this.targetElement.querySelector("ul");
        ulElement.classList.add('jsac-list');
        var liElements = ulElement.querySelectorAll('li');
        liElements.forEach(function (element) {
            var headerDiv = element.querySelector("div:first-child");
            var hTag = headerDiv.querySelector('h3');
            var bodyDiv = element.querySelector("div:last-child");

            element.classList.add('jsac-list-item');
            headerDiv.classList.add('jsac-header');
            hTag.classList.add('jsac-title-h');
            bodyDiv.classList.add('jsac-body');


            //addEventListener

            headerDiv.addEventListener("click", clickLI);
            var findExpandedClass = document.querySelectorAll('li');
            findExpandedClass.forEach(function (t) {
                t.classList.remove('expanded');
                t.classList.add('collapsed');

            });


            function clickLI(e) {

                if (e.currentTarget.parentNode.classList.contains('expanded')) {
                    e.currentTarget.parentNode.classList.remove('expanded');
                    e.currentTarget.parentNode.classList.add('collapsed');

                } else if (e.currentTarget.parentNode.classList.contains('collapsed')) {
                    e.currentTarget.parentNode.classList.remove('collapsed');
                    e.currentTarget.parentNode.classList.add('expanded');

                } else {
                    e.currentTarget.parentNode.classList.add('expanded');
                    e.currentTarget.parentNode.classList.remove('collapsed');
                }
            }


        });

    }

    //  start construction operations
    //  if parameter is element selector
    if (typeof elementOrSelector == 'string') {
        this.targetElement = document.querySelector(elementOrSelector);
        if (this.targetElement == null) {
            throw ('invalid element selector');
        }
    }
    //  if parameter is element DOM object
    else if (typeof elementOrSelector == 'object')
        this.targetElement = elementOrSelector;
    else
        throw ('Unknown element type');

    //  set autoincrement instance id to object
    this.id = JSAccordion.instances.length;

    JSAccordion.instances.push(this);

    return this;
}

//  define static property to keep all instances
JSAccordion.instances = [];