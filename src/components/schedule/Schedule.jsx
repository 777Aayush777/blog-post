import React from "react"
import './Schedule.css'

export default function Schedule(){
    return(
        <section class="section footer-schedule-call-section">
        <div class="wide-container">
        <div class="wide-card tiber-bg footer-schedule-call-bg">
            <div class="vertical-left-flex mob-centre-flex">
             <h2 class="h4 contact-us">Get Nova Benefits for your team</h2>
             <p class="text-b4 footer-cta-section-subheading contact-us">Schedule a call with us and we’ll get back to you</p>

             <div class="btn-container small-margin">
                <a id="guide-home-footer-schedule" href="#" class="button with-left-icon cta-popup-trigger w-node-_4afe545b-6b11-7238-a2e6-d816edcb0ebb-edcb0eb2 w-inline-block">
                <div class="icon-button-icon w-embed"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 2.25H14.25V0.75H12.75V2.25H5.25V0.75H3.75V2.25H1.5V17.25H16.5V2.25ZM15 15.75H3V6H15V15.75Z" fill="currentColor"></path>
                </svg></div>
                <div>Schedule a callback</div>
                </a>
            </div>
            </div>
        </div>
        </div>
        </section>
    )
}