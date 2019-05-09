function JSAccordion(elementOrSelector) {
    if (!(this instanceof JSAccordion))
        return new JSAccordion(elementOrSelector);

    //  define public methods

    this.init=function () {
        this.targetElement.classList.add('container');
        var ul=this.targetElement.querySelector("ul");
        ul.classList.add('list');
        var all_li=ul.querySelectorAll('li');
        all_li.forEach(function (element) {
            element.classList.add('list-item');
            var first_div=element.querySelector("div:first-child");
            first_div.classList.add('header');
            var span=first_div.querySelector('span');
            span.classList.add('status-icon');
            var h=first_div.querySelector('h3');
            h.classList.add('titl_h');
            var second_div=element.querySelector("div:last-child");
            second_div.classList.add('body');
            var all_p=second_div.querySelectorAll('p')
            all_p.forEach(function (element_two) {
                element_two.classList.add('p_body');

            })
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