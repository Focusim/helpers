

class ScrollAnchors {

    constructor() {
        this.state = {

            anchors: {
                nameAnchorLink: 'data-anchor-link',
                nameActiveElem: 'nav__item-anchor--active',
                nameAnchorSection: 'data-anchor',
                linkElements: document.querySelectorAll('[data-anchor-link]'),
                sections: document.querySelectorAll('[data-anchor]'),
                length: document.querySelectorAll('[data-anchor]').length,
                list: [],
                active: {
                    name: '',
                    topPoint: '',
                    botPoint: '',
                }
            },
        }

        this.initAnchors();
    }
    initAnchors() {
        this.recalcAnchorValues();
        this.initClickAnchorHandler();
        this.scrollAnchorHandler();
        window.addEventListener('scroll', this.scrollAnchorHandler.bind(this));
        window.addEventListener('resize', this.recalcAnchorValues.bind(this));
    }

    recalcAnchorValues() {
        this.state.anchors.list = [];
        this.state.anchors.sections.forEach(section => { // set value
            this.state.anchors.list.push({
                name: section.getAttribute(this.state.anchors.nameAnchorSection),
                topPoint: section.getBoundingClientRect().top + window.pageYOffset,
                botPoint: section.getBoundingClientRect().top + window.pageYOffset + section.getBoundingClientRect().height,
            });
        });
    }

    scrollAnchorHandler() {
        const winPos = window.pageYOffset;
        this.recalcAnchorValues();

        // fix unnecessary code triggering
        if (winPos <= this.state.anchors.active.topPoint || winPos >= this.state.anchors.active.botPoint) { // true : winPos <= this.state.anchors.active.topPoint
            for(let i = 0; i < this.state.anchors.length; i++) {
                const unit = this.state.anchors.list[i];

                if (unit.topPoint <= winPos && unit.botPoint >= winPos) {
                    this.state.anchors.linkElements.forEach(el => {  // set || clear
                        if (el.getAttribute(this.state.anchors.nameAnchorLink) === unit.name) { // set
                            el.classList.add(this.state.anchors.nameActiveElem);
                            this.state.anchors.active.name = el.getAttribute(this.state.anchors.nameAnchorLink);
                            this.state.anchors.active.topPoint = unit.topPoint;
                            this.state.anchors.active.botPoint = unit.botPoint;
                        } else { // clear
                            el.classList.remove(this.state.anchors.nameActiveElem);
                        }
                    });

                    break;
                } else {
                    this.state.anchors.active.topPoint = null;
                    this.state.anchors.active.botPoint = null;
                    this.state.anchors.linkElements.forEach(el => { el.classList.remove(this.state.anchors.nameActiveElem); });
                }
            }
        }
    }

    initClickAnchorHandler() {
        this.state.anchors.linkElements.forEach((item, index, arr) => {
            item.addEventListener('click', (ev) => {
                this.recalcAnchorValues();

                for(let i = 0; i < this.state.anchors.length; i++) {
                    const section = this.state.anchors.list[i];

                    if (section.name === item.getAttribute(this.state.anchors.nameAnchorLink)) {
                        this.setUrlHrefAnchor(section.name);
                        this.scrollToAnchor(section);
                        break;
                    }
                }
            });
        });
    }

    scrollToAnchor(section) {
        window.scrollTo({
            top: section.topPoint + 1,
            behavior: 'smooth'
        });
    }

    setUrlHrefAnchor(anchorName) {
        history.pushState(null, null, `#${anchorName}`);
    }
}