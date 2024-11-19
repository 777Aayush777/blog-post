import React from "react"
import "./Footer.css"


export default function Footer(){
    return(
    <footer className="footer">
        <div className="mainContainer">
        <div className="footer-newsletter-links-flex">
            <div className="newsLetter">
                <div className="left">
                <h3 class="h3x">Subscribe to People First Dispatch</h3>
                <div class="text-b4 footer-newsletter">A weekly digest of latest news, articles and resources</div>
                <div className="notify">
                <form className="emailbar">
                <input class="newsletter-input w-input" maxlength="256" name="Newsletter-Email" data-name="Newsletter Email" placeholder="Your Email Address" type="email" id="Newsletter-Email" required=""></input>
                <input type="submit" data-wait="Please wait..." id="people-first-dispatch-subscribe" class="newsletter-submit-btn w-button" value="Subscribe"></input>
                </form>
                </div>
                <p>By continuing, you agree to NovaBenefits <a target="_blank" href="https://www.novabenefits.com/terms">
                Terms of Use</a> and <a target="_blank" href="https://www.novabenefits.com/privacy">Privacy Policy</a></p>

                <div class="footer-social-links-container"><div class="text-b6">Follow us on</div>
                <div class="footer-social-links-grid">
                <a href="https://www.linkedin.com/company/nova-benefits/" target="_blank" class="w-inline-block">
                <img src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/62a873973a3d2c314b2d5cb0_footer-linkedin.svg" loading="lazy" alt="" 
                class="footer-social-img">
                </img>
                </a>
                <a href="https://twitter.com/novabenefits" target="_blank" class="w-inline-block">
                <img src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/62a873973f0a9791ef619980_footer-twitter.svg" loading="lazy"
                 alt="" class="footer-social-img">
                </img>
                </a>
                 <a href="https://www.youtube.com/channel/UCXeubD17S937tzG9R2SI2hg/featured" target="_blank" 
                 class="w-inline-block"><img src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/62a87397ceb3bab8f48aa53e_footer-youtube.svg" 
                 loading="lazy" alt="" class="footer-social-img">
                </img>
                </a>
                
                <a href="https://www.instagram.com/novabenefits/" target="_blank" class="w-inline-block">
                <img src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/62a87397f0d11cd11da04409_footer-instagram.svg" loading="lazy" alt="" 
                class="footer-social-img"></img></a>
                <a href="mailto:support@nova-benefits.com" class="w-inline-block"></a>

                <a href="mailto:support@nova-benefits.com" class="w-inline-block"><img src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/62a8739790e6bc2810060ede_footer-email.svg" loading="lazy" alt="" class="footer-social-img"></img></a>
                </div>
             </div>
             <div class="footer-appstore-btn-container"><a id="w-node-_69176226-9cd7-55b1-e448-f80f991ed923-a20aa2b4" 
                href="https://play.google.com/store/apps/details?id=com.novabenefits" target="_blank" class="w-inline-block">
                <img src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/62a87a981ee790e9443b9976_footer-play-store.svg" 
                loading="lazy" width="115" height="37" alt="" class="footer-app-store-img"></img></a><a id="w-node-_69176226-9cd7-55b1-e448-f80f991ed925-a20aa2b4" 
                href="https://apps.apple.com/in/app/nova-benefits/id1561333321" target="_blank" class="w-inline-block">
                <img src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/62a87a98704e2ae85bee14a1_footer-app-store.svg" 
                loading="lazy" width="115" height="37" alt="" class="footer-app-store-img"></img></a></div>
            </div>
        </div>
        <div class="footer-form-links-separator"></div>
            <div class="footer-links-grid">
                <div id="w-node-a6ba866f-23e2-02ed-f370-6beea20aa2ca-a20aa2b4" class="footer-links-item">
                    <div class="text-caps footer-links-title">🛡insurance</div><a href="/insurance-overview" class="text-b5 footer-link">
                    Insurance Overview</a><a href="/group-health-insurance" class="text-b5 footer-link">Group Health Insurance</a>
                    <a href="/super-top-up-insurance" class="text-b5 footer-link">Super Top-Ups</a><a href="/covid-insurance" class="text-b5 footer-link">
                    Covid Insurance</a>
                    </div>
                <div id="w-node-f4cd6ca4-c587-2a18-c567-a06d2a8df869-a20aa2b4" class="footer-links-item"><div class="text-caps footer-links-title">
                ✨ Wellness</div><a href="/wellness-overview" class="text-b5 footer-link">Wellness Overview</a><a href="/telehealth" class="text-b5 footer-link">
                Telehealth</a><a href="/fitness" class="text-b5 footer-link">Fitness</a><a href="/mental-wellness" class="text-b5 footer-link">Mental Wellness</a>
                <a href="/maternity-box" class="text-b5 footer-link">Maternity Box</a></div><div id="w-node-c80b8f22-b684-e765-7faf-7a183548bc4a-a20aa2b4" 
                class="footer-links-grid prod-sol">
                <div id="w-node-a6ba866f-23e2-02ed-f370-6beea20aa2d1-a20aa2b4" class="footer-links-item">
                <div class="text-capsfooter-links-title">💻 &nbsp;Platform</div><a href="/employee-experience" class="text-b5 footer-link">Employee</a><a href="/employer-experience" 
                class="text-b5 footer-link">Employer</a></div><div id="w-node-a1c9b15b-5f92-f16a-a1b2-340f11cb1d34-a20aa2b4" class="footer-links-item"><div 
                class="text-caps footer-links-title">💡 Solutions</div><a href="/smb-business-solutions" class="text-b5 footer-link">Small teams</a>
        <a href="/midsize-business-solutions" class="text-b5 footer-link">Large teams</a></div><div id="w-node-_397dfae4-34de-b638-a6c2-8e57d8e0ee65-a20aa2b4" 
        class="footer-links-item"><div class="text-caps footer-links-title">🏤 Reco by nova</div><a href="https://getreco.in/cyber-insurance" 
        class="text-b5 footer-link">Cyber </a><a href="https://getreco.in/director-and-officers" class="text-b5 footer-link">D &amp; 0</a>
        <a href="https://getreco.in/errors-and-omissions" class="text-b5 footer-link">E &amp; 0</a><a href="https://getreco.in/commercial-general-liability" 
        class="text-b5 footer-link">CGL</a><a href="https://getreco.in/crime-insurance" class="text-b5 footer-link">Crime</a></div></div>
        <div id="w-node-a6ba866f-23e2-02ed-f370-6beea20aa2d8-a20aa2b4" class="footer-links-item"><div class="text-caps footer-links-title">📚 learn</div>
        <a href="/careers" class="text-b5 footer-link">Careers</a><a href="/about-us" class="text-b5 footer-link">About-Us</a>
        <a href="/contact-us" class="text-b5 footer-link">Contact Us</a><a href="/faqs" class="text-b5 footer-link">FAQs</a>
        <a href="/testimonials" class="text-b5 footer-link">Testimonials</a><a href="/app" class="text-b5 footer-link">Apps</a>
        <a href="https://blog.getnovaapp.com/" target="_blank" class="text-b5 footer-link">Blogs</a>
        <a href="/guides" class="text-b5 footer-link">Guides</a><a href="/glossary" class="text-b5 footer-link">Glossary</a>
        <a href="https://infosec.novabenefits.com/" class="text-b5 footer-link">Security</a></div></div>
        </div>
            

        <div class="logo-cities-wrapper">
            <div class="footer-app-links-flex">
                <div class="footer-got-you-covered">
                <img src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/62720b75a7b402708d156f6d_logo-insignia.svg" loading="lazy" id="w-node-a6ba866f-23e2-02ed-f370-6beea20aa2e6-a20aa2b4" alt="" class="footer-shield-logo"></img>
                <div id="w-node-e647324c-6916-e4fc-5261-e3389ff60c45-a20aa2b4" class="text-wrapper">
                <div id="w-node-a6ba866f-23e2-02ed-f370-6beea20aa2e4-a20aa2b4" class="text-b5">We’ve got you covered. Literally.</div>
                <div id="w-node-a6ba866f-23e2-02ed-f370-6beea20aa2e7-a20aa2b4" class="text-b6 footer-cc-2022">© NovaBenefits Private Limited, 2024</div>
                </div>
                </div>
            </div>
            <div id="w-node-_09ee1875-e1ce-5e89-c246-6e4a330fdcce-a20aa2b4" class="footer-links-item cities">
            <div className="div-block-26">
            <div class="div-block-27">
                <a href="https://maps.app.goo.gl/KV6RKFfUTthqoCkN7" target="_blank" class="text-b5 footer-link">Bangalore</a>
                <img src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/65e1a6e4d979d67b8cab0091_%E2%AC%A9.png" loading="lazy" alt="" 
                class="divider-diamond"></img><a href="https://goo.gl/maps/hjk1VXXuVP56xzgJ7" target="_blank" class="text-b5 footer-link">Mumbai</a>
                <img src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/65e1a6e4d979d67b8cab0091_%E2%AC%A9.png" loading="lazy" alt="" 
                class="divider-diamond"></img><a href="https://maps.app.goo.gl/WEZgELkHEHmQoAmn6" target="_blank" class="text-b5 footer-link">Pune</a>
            </div>
            <div class="div-block-28"><img src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/65e1a6e4d979d67b8cab0091_%E2%AC%A9.png" 
            loading="lazy" alt="" class="divider-diamond hidden"></img><a href="https://www.google.com/maps/place/91springboard/@28.4497346,77.0734,17z/data=!4m7!3m6!1s0x390d18eb379fa2bb:0xfe9158c05b779b08!8m2!3d28.4497637!4d77.0752724!15sCkFCdWlsZGluZyBOdW1iZXIgMTQ1LCAzcmQgRmxvb3IsIFNlY3RvciA0NCBSZCwgU2VjdG9yIDQ0LCBHdXJ1Z3JhbVo_Ij1idWlsZGluZyBudW1iZXIgMTQ1IDNyZCBmbG9vciBzZWN0b3IgNDQgcmQgc2VjdG9yIDQ0IGd1cnVncmFtkgEPY293b3JraW5nX3NwYWNlmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJsY1dRdFgyZEJSUkFC4AEA!16s%2Fg%2F11gf5zc_q4?coh=164777&amp;entry=tt" 
            target="_blank" class="text-b5 footer-link">Delhi</a><img src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/65e1a6e4d979d67b8cab0091_%E2%AC%A9.png" 
            loading="lazy" alt="" class="divider-diamond"></img><a href="https://maps.app.goo.gl/8JYvVFst1o8W9ED5A?g_st=iw" target="_blank" class="text-b5 footer-link">Chennai</a>
            <img src="https://cdn.prod.website-files.com/626fcecbc824dd1c670451ba/65e1a6e4d979d67b8cab0091_%E2%AC%A9.png" loading="lazy" alt="" class="divider-diamond"></img>
            <a href="https://maps.app.goo.gl/hYm8anw9zFhT1pL79" target="_blank" class="text-b5 footer-link">Hyderabad</a>
            </div>
            </div>
            </div>
        </div>
        <div class="footer-separator mob-hide"></div>
        <div className="footer-disclaimer">
        <div class="text-b6 footer-cc">
            <p>ISO&nbsp;27001:2022 certified, SOC 2 Type II compliant</p>
            Insurance products are offered and serviced by NovaBenefits Insurance Brokers Pvt Ltd | CIN U66020KA2020PTC141160 IRDAI Broking License Registration Code:
             IRDA/DB848/20, Certificate No. 753, License category- Direct Broker (Life &amp; General), License validity till 12-07-2027.
        </div>
        <div class="footer-term-privacy-links">
        <a href="/terms" class="text-b6 footer-cc">Terms of use</a>
        <a id="w-node-a6ba866f-23e2-02ed-f370-6beea20aa2f0-a20aa2b4" href="/privacy" class="text-b6 footer-cc">Privacy Notice</a>
        <a href="/pricing-and-cancellation-policy" class="text-b6 footer-cc">Pricing and Cancellation Policy</a><a href="/cookie-notice" 
        class="text-b6 footer-cc">Cookie Notice</a>
        </div>

        </div>

        </div>
    </footer>
    )
}