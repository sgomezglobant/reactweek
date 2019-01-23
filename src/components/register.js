import React, {Component} from "react";
import "./../styles/register.scss";


/* Register Eventbrite widget */

class Register extends Component {

  componentDidMount() {
    window.EBWidgets.createWidget({
      // Required
      widgetType: 'checkout',
      eventId: '55239292210',
      iframeContainerId: 'eventbrite-widget-container-55239292210',
      iframeContainerHeight: 425
  });
  window.EBWidgets.createWidget({
    widgetType: 'checkout',
    eventId: '55239292210',
    modal: true,
    modalTriggerElementId: 'eventbrite-widget-modal-trigger-55239292210',
});
  }

  render () {
    return (
      <section className="register">
        <header className="register-header">
          <h2 className="register-header__title">Registrate</h2>
        </header>
        <main className="register-widget" id="eventbrite-widget-container-55239292210">
        </main>
        <footer>
          <button
          className="register-widget__cta"
          id="eventbrite-widget-modal-trigger-55239292210" type="button">Registarse</button>
          </footer>
      </section>
    )
  }
}

export default Register;