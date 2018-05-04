import React, {Component} from "react";

export default class Nav extends Component {
     constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        if (this.state.isToggleOn === false && window.outerWidth > 981) {
            document.querySelector('section').classList.add('moveContent')
            document.querySelector('section').classList.remove('backLogo')
        } else if (this.state.isToggleOn === false && window.outerWidth < 981) {
            document.querySelector('section').classList.toggle('hide')
        } else {
            if (window.outerWidth < 981) {
                document.querySelector('section').classList.toggle('hide')
            }
            document.querySelector('section').classList.toggle('backLogo')
        }
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    render(){
        if (this.props.data) {
            var menu = this.props.data.menu.map((menu) => {
                return (
                    <li className="nav-item noListStyle" key={menu.name}>
                        <a className="nav-link js-scroll-trigger fs-20 fs-sm-52 white " href={process.env.PUBLIC_URL + menu.href}>{menu.name}</a>
                    </li>
                )
            })
        }
        return(
            <div>
                <div id="Menus">
                    <div id="Menu" className={`${this.state.isToggleOn === true && window.outerWidth > 981 ? 'f-l showMenu' : 'f-l hide'}`}>
                        <aside>
                            <ul className="p-l-70 ulMenu">
                                {menu}
                            </ul>
                        </aside>
                    </div>
                    <div id="nav-icon1" className={`${this.state.isToggleOn === true ? 'f-l open' : 'f-l'}`} onClick={this.handleClick}>
                        <span className={`${this.state.isToggleOn === true ? 'bgWhite' : 'bgPrimary'}`}></span>
                        <span className={`${this.state.isToggleOn === true ? 'bgWhite' : 'bgPrimary'}`}></span>
                        <span className={`${this.state.isToggleOn === true ? 'bgWhite' : 'bgPrimary'}`}></span>
                    </div>
                </div>


                <div id="MenuMobile" className={"col-12 f-l absolute " + `${this.state.isToggleOn === true && window.outerWidth < 981 ? 'show' : 'hide'}`}>
                    <aside className="col-12 center">
                        <ul className="ulMenu m-t-sm-80">
                            {menu}
                        </ul>
                    </aside>
                </div>
            </div>
        )
    }
};
