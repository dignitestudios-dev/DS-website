"use client"
import { GlobalContext } from '@/context/GlobalContext'
import React, { useContext } from 'react'

const TermsPage = () => {
    const { palette } = useContext(GlobalContext)
    return (
        <div className='w-full h-auto flex flex-col gap-4 justify-start items-start px-4 md:px-12 lg:px-28' style={{
            background: palette?.background,
            color: palette?.color
        }}>
            <h1 className='text-[45px] font-extrabold lg:text-[64px]  lg:font-bold uppercase'>Terms & Conditions</h1>
            <div>
                <h3 className='text-xl font-bold'><span >General Terms</span></h3>
                <p><span >By accessing and placing an order with Carter Boating, you confirm that you are in agreement with and bound by the terms of service contained in the Terms &amp; Conditions outlined below. These terms apply to the entire mobile application and any email or other type of communication between you and Carter Boating.</span></p>
                <p><br /></p>
                <p><span >Under no circumstances shall Carter Boating team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if Carter Boating team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof.</span></p>
                <p><br /></p>
                <p><span >Carter Boating will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy in any moment.&nbsp;</span></p>
                <p><br /></p>
                <h3 className='text-xl font-bold'><span >License</span></h3>
                <p><span >Carter Boating grants you a revocable, non-exclusive, non-transferable, limited license to download, install and use the app strictly in accordance with the terms of this Agreement.</span></p>
                <p><br /></p>
                <p><span >These Terms &amp; Conditions are a contract between you and Carter Boating (referred to in these Terms &amp; Conditions as &quot;Carter Boating&quot;, &quot;us&quot;, &quot;we&quot; or &quot;our&quot;), the provider of the Carter Boating mobile application and the services accessible from the Carter Boating mobile application (which are collectively referred to in these Terms &amp; Conditions as the &quot;Carter Boating Service&quot;).</span></p>
                <p><br /></p>
                <p><span >You are agreeing to be bound by these Terms &amp; Conditions. If you do not agree to these Terms &amp; Conditions, please do not use the Carter Boating Service. In these Terms &amp; Conditions, &quot;you&quot; refers both to you as an individual and to the entity you represent. If you violate any of these Terms &amp; Conditions, we reserve the right to cancel your account or block access to your account without notice.</span></p>
                <p><br /></p>
                <p><span >Definitions and key terms</span></p>
                <p><span >To help explain things as clearly as possible in this Terms &amp; Conditions, every time any of these terms are referenced, are strictly defined as:</span></p>
                <p><br /></p>
                <p><span >Cookie: small amount of data generated by a mobile application and saved by your web browser. It is used to identify your browser, provide analytics, remember information about you such as your language preference or login information.</span></p>
                <p><span >Company: when this terms mention &ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our,&rdquo; it refers to Carter Fishing, (1660-1 Norman Park Dr, Tallahassee, FL, 32304), that is responsible for your information under this Terms &amp; Conditions.</span></p>
                <p><span >Country: where Carter Boating or the owners/founders of Carter Boating are based, in this case is United States</span></p>
                <p><span >Device: any internet connected device such as a phone, tablet, computer or any other device that can be used to visit Carter Boating and use the services.</span></p>
                <p><span >Service: refers to the service provided by Carter Boating as described in the relative terms (if available) and on this platform.</span></p>
                <p><span >Third-party service: refers to advertisers, contest sponsors, promotional and marketing partners, and others who provide our content or whose products or services we think may interest you.</span></p>
                <p><span >App/Application: Carter Boating app, refers to the SOFTWARE PRODUCT identified above.</span></p>
                <p><span >You: a person or entity that is registered with Carter Boating to use the Services.</span></p>
                <p><br /></p>
                <p><span >Restrictions</span></p>
                <p><span >You agree not to, and you will not permit others to:</span></p>
                <p><br /></p>
                <p><span >License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the app or make the platform available to any third party.</span></p>
                <p><span >Modify, make derivative works of, disassemble, decrypt, reverse compile or reverse engineer any part of the app.</span></p>
                <p><span >Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of Carter Boating or its affiliates, partners, suppliers or the licensors of the app.</span></p>
                <p><br /></p>
                <p><span >Payment</span></p>
                <p><span >If you register to any of our recurring payment plans, you agree to pay all fees or charges to your account for the Service in accordance with the fees, charges and billing terms in effect at the time that each fee or charge is due and payable. Unless otherwise indicated in an order form, you must provide Carter Boating with a valid credit card (Visa, MasterCard, or any other issuer accepted by us) (&ldquo;Payment Provider&rdquo;) as a condition to signing up for the Premium plan. Your Payment Provider agreement governs your use of the designated credit card account, and you must refer to that agreement and not these Terms to determine your rights and liabilities with respect to your Payment Provider. By providing Carter Boating with your credit card number and associated payment information, you agree that Carter Boating is authorized to verify information immediately, and subsequently invoice your account for all fees and charges due and payable to Carter Boating hereunder and that no additional notice or consent is required. You agree to immediately notify Carter Boating of any change in your billing address or the credit card used for payment hereunder. Carter Boating reserves the right at any time to change its prices and billing methods, either immediately upon posting on our Site or by e-mail delivery to your organization&rsquo;s administrator(s).</span></p>
                <p><br /></p>
                <p><span >Any attorney fees, court costs, or other costs incurred in collection of delinquent undisputed amounts shall be the responsibility of and paid for by you.</span></p>
                <p><br /></p>
                <p><span >No contract will exist between you and Carter Boating for the Service until Carter Boating accepts your order by a confirmatory e-mail, SMS/MMS message, or other appropriate means of communication.</span></p>
                <p><br /></p>
                <p><span >You are responsible for any third-party fees that you may incur when using the Service.</span></p>
                <p><br /></p>
                <p><span >Return and Refund Policy</span></p>
                <p><span >Thanks for shopping at Carter Boating. We appreciate the fact that you like to buy the stuff we build. We also want to make sure you have a rewarding experience while you&rsquo;re exploring, evaluating, and purchasing our products.</span></p>
                <p><br /></p>
                <p><span >As with any shopping experience, there are terms and conditions that apply to transactions at Carter Boating. We&rsquo;ll be as brief as our attorneys will allow. The main thing to remember is that by placing an order or making a purchase at Carter Boating, you agree to the terms along with Carter Boating&rsquo;s Privacy Policy.</span></p>
                <p><br /></p>
                <p><span >If, for any reason, You are not completely satisfied with any good or service that we provide, don&apos;t hesitate to contact us and we will discuss any of the issues you are going through with our product.</span></p>
                <p><br /></p>
                <p><span >Your Suggestions</span></p>
                <p><span >Any feedback, comments, ideas, improvements or suggestions (collectively, &quot;Suggestions&quot;) provided by you to Carter Boating with respect to the app shall remain the sole and exclusive property of Carter Boating.</span></p>
                <p><br /></p>
                <p><span >Carter Boating shall be free to use, copy, modify, publish, or redistribute the Suggestions for any purpose and in any way without any credit or any compensation to you.</span></p>
                <p><br /></p>
                <p><span >Your Consent</span></p>
                <p><span >We&apos;ve updated our Terms &amp; Conditions to provide you with complete transparency into what is being set when you visit our site and how it&apos;s being used. By using our app, registering an account, or making a purchase, you hereby consent to our Terms &amp; Conditions.</span></p>
                <p><br /></p>
                <p><span >Links to Other Mobile applications</span></p>
                <p><span >This Terms &amp; Conditions applies only to the Services. The Services may contain links to other mobile applications not operated or controlled by Carter Boating. We are not responsible for the content, accuracy or opinions expressed in such mobile applications, and such mobile applications are not investigated, monitored or checked for accuracy or completeness by us. Please remember that when you use a link to go from the Services to another mobile application, our Terms &amp; Conditions are no longer in effect. Your browsing and interaction on any other mobile application, including those that have a link on our platform, is subject to that mobile application&rsquo;s own rules and policies. Such third parties may use their own cookies or other methods to collect information about you.</span></p>
                <p><br /></p>
                <p><span >Cookies</span></p>
                <p><span >Carter Boating uses &quot;Cookies&quot; to identify the areas of our app that you have visited. A Cookie is a small piece of data stored on your computer or mobile device by your web browser. We use Cookies to enhance the performance and functionality of our app but are non-essential to their use. However, without these cookies, certain functionality like videos may become unavailable or you would be required to enter your login details every time you visit the app as we would not be able to remember that you had logged in previously. Most web browsers can be set to disable the use of Cookies. However, if you disable Cookies, you may not be able to access functionality on our app correctly or at all. We never place Personally Identifiable Information in Cookies.</span></p>
                <p><br /></p>
                <p><span >Changes To Our Terms &amp; Conditions</span></p>
                <p><span >You acknowledge and agree that Carter Boating may stop (permanently or temporarily) providing the Service (or any features within the Service) to you or to users generally at Carter Boating&rsquo;s sole discretion, without prior notice to you. You may stop using the Service at any time. You do not need to specifically inform Carter Boating when you stop using the Service. You acknowledge and agree that if Carter Boating disables access to your account, you may be prevented from accessing the Service, your account details or any files or other materials which is contained in your account.</span></p>
                <p><br /></p>
                <p><span >If we decide to change our Terms &amp; Conditions, we will post those changes on this page, and/or update the Terms &amp; Conditions modification date below.</span></p>
                <p><br /></p>
                <p><span >Modifications to Our app</span></p>
                <p><span >Carter Boating reserves the right to modify, suspend or discontinue, temporarily or permanently, the app or any service to which it connects, with or without notice and without liability to you.</span></p>
                <p><br /></p>
                <p><span >Updates to Our app</span></p>
                <p><span >Carter Boating may from time to time provide enhancements or improvements to the features/ functionality of the app, which may include patches, bug fixes, updates, upgrades and other modifications (&quot;Updates&quot;).</span></p>
                <p><br /></p>
                <p><span >Updates may modify or delete certain features and/or functionalities of the app. You agree that Carter Boating has no obligation to (i) provide any Updates, or (ii) continue to provide or enable any particular features and/or functionalities of the app to you.</span></p>
                <p><br /></p>
                <p><span >You further agree that all Updates will be (i) deemed to constitute an integral part of the app, and (ii) subject to the terms and conditions of this Agreement.</span></p>
                <p><br /></p>
                <p><span >Third-Party Services</span></p>
                <p><span >We may display, include or make available third-party content (including data, information, applications and other products services) or provide links to third-party mobile applications or services (&quot;Third- Party Services&quot;).</span></p>
                <p><br /></p>
                <p><span >You acknowledge and agree that Carter Boating shall not be responsible for any Third-Party Services, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect thereof. Carter Boating does not assume and shall not have any liability or responsibility to you or any other person or entity for any Third-Party Services.</span></p>
                <p><br /></p>
                <p><span >Third-Party Services and links thereto are provided solely as a convenience to you and you access and use them entirely at your own risk and subject to such third parties&apos; terms and conditions.</span></p>
                <p><br /></p>
                <p><span >Term and Termination</span></p>
                <p><span >This Agreement shall remain in effect until terminated by you or Carter Boating.</span></p>
                <p><br /></p>
                <p><span >Carter Boating may, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice.</span></p>
                <p><br /></p>
                <p><span >This Agreement will terminate immediately, without prior notice from Carter Boating, in the event that you fail to comply with any provision of this Agreement. You may also terminate this Agreement by deleting the app and all copies thereof from your computer.</span></p>
                <p><br /></p>
                <p><span >Upon termination of this Agreement, you shall cease all use of the app and delete all copies of the app from your computer.</span></p>
                <p><br /></p>
                <p><span >Termination of this Agreement will not limit any of Carter Boating&apos;s rights or remedies at law or in equity in case of breach by you (during the term of this Agreement) of any of your obligations under the present Agreement.</span></p>
                <p><br /></p>
                <p><span >Copyright Infringement Notice</span></p>
                <p><span >If you are a copyright owner or such owner&rsquo;s agent and believe any material on our app constitutes an infringement on your copyright, please contact us setting forth the following information: (a) a physical or electronic signature of the copyright owner or a person authorized to act on his behalf; (b) identification of the material that is claimed to be infringing; (c) your contact information, including your address, telephone number, and an email; (d) a statement by you that you have a good faith belief that use of the material is not authorized by the copyright owners; and (e) the a statement that the information in the notification is accurate, and, under penalty of perjury you are authorized to act on behalf of the owner.</span></p>
                <p><br /></p>
                <p><span >Indemnification</span></p>
                <p><span >You agree to indemnify and hold Carter Boating and its parents, subsidiaries, affiliates, officers, employees, agents, partners and licensors (if any) harmless from any claim or demand, including reasonable attorneys&apos; fees, due to or arising out of your: (a) use of the app; (b) violation of this Agreement or any law or regulation; or (c) violation of any right of a third party.</span></p>
                <p><br /></p>
                <p><span >No Warranties</span></p>
                <p><span >The app is provided to you &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, Carter Boating, on its own behalf and on behalf of its affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the app, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, Carter Boating provides no warranty or undertaking, and makes no representation of any kind that the app will meet your requirements, achieve any intended results, be compatible or work with any other software, apps, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</span></p>
                <p><br /></p>
                <p><span >Without limiting the foregoing, neither Carter Boating nor any Carter Boating&apos;s provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the app, or the information, content, and materials or products included thereon; (ii) that the app will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the app; or (iv) that the app, its servers, the content, or e-mails sent from or on behalf of Carter Boating are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</span></p>
                <p><br /></p>
                <p><span >Some jurisdictions do not allow the exclusion of or limitations on implied warranties or the limitations on the applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to you.</span></p>
                <p><br /></p>
                <p><span >Limitation of Liability</span></p>
                <p><span >Notwithstanding any damages that you might incur, the entire liability of Carter Boating and any of its suppliers under any provision of this Agreement and your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by you for the app.</span></p>
                <p><br /></p>
                <p><span >To the maximum extent permitted by applicable law, in no event shall Carter Boating or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, for loss of data or other information, for business interruption, for personal injury, for loss of privacy arising out of or in any way related to the use of or inability to use the app, third-party software and/or third-party hardware used with the app, or otherwise in connection with any provision of this Agreement), even if Carter Boating or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</span></p>
                <p><br /></p>
                <p><span >Some states/jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to you.</span></p>
                <p><br /></p>
                <p><span >Severability</span></p>
                <p><span >If any provision of this Agreement is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</span></p>
                <p><br /></p>
                <p><span >This Agreement, together with the Privacy Policy and any other legal notices published by Carter Boating on the Services, shall constitute the entire agreement between you and Carter Boating concerning the Services. If any provision of this Agreement is deemed invalid by a court of competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of this Agreement, which shall remain in full force and effect. No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term, and Carter Boating&rsquo;s failure to assert any right or provision under this Agreement shall not constitute a waiver of such right or provision. YOU AND Carter Boating AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE SERVICES MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.</span></p>
                <p><br /></p>
                <p><span >Waiver</span></p>
                <p><span >Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Agreement shall not effect a party&apos;s ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute waiver of any subsequent breach.</span></p>
                <p><br /></p>
                <p><span >No failure to exercise, and no delay in exercising, on the part of either party, any right or any power under this Agreement shall operate as a waiver of that right or power. Nor shall any single or partial exercise of any right or power under this Agreement preclude further exercise of that or any other right granted herein. In the event of a conflict between this Agreement and any applicable purchase or other terms, the terms of this Agreement shall govern.</span></p>
                <p><br /></p>
                <p><span >Amendments to this Agreement</span></p>
                <p><span >Carter Boating reserves the right, at its sole discretion, to modify or replace this Agreement at any time. If a revision is material we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</span></p>
                <p><br /></p>
                <p><span >By continuing to access or use our app after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Carter Boating.</span></p>
                <p><br /></p>
                <p><span >Entire Agreement</span></p>
                <p><span >The Agreement constitutes the entire agreement between you and Carter Boating regarding your use of the app and supersedes all prior and contemporaneous written or oral agreements between you and Carter Boating.</span></p>
            </div>
        </div>
    )
}

export default TermsPage