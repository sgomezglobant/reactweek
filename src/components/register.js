import React, {Component} from "react";
import "./../styles/register.scss";

class Register extends Component {

  componentDidMount() {
    window.EBWidgets.createWidget({
      widgetType: 'checkout',
      eventId: '55239292210',
      iframeContainerId: 'eventbrite-widget-container-55239292210'
    });
  }

  render () {
    return (
      <section className="rw-register">
        <div id="eventbrite-widget-container-55239292210"></div>
        <footer>
          <button
            className="rw-register__widget-cta"
            id="eventbrite-widget-modal-trigger-55239292210"
            type="button"
          >
            Registarse
          </button>
        </footer>
      </section>
    )
  }
}

export default Register;
