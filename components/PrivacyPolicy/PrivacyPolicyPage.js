"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";

const PrivacyPolicyPage = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      className="w-full h-auto flex flex-col gap-4 justify-start items-start px-4 md:px-12 lg:px-64 lg:pb-10"
      style={{
        background: palette?.background,
        color: palette?.color,
      }}
    >
      <h1 className="text-[45px] font-extrabold lg:text-[55px]  lg:font-bold uppercase">
        Privacy Policy
      </h1>
      <div className="">
        <h3 className="text-xl font-bold mt-5">
          <span>Definitions and key terms</span>
        </h3>
        <p className="text-md font-medium my-3">
          To help explain things as clearly as possible in this Privacy Policy,
          every time any of these terms are referenced, are strictly defined as:
        </p>
        <ul className="ml-4 list-disc flex flex-col gap-y-2">
          <li>
            Cookie: small amount of data generated by a website and saved by
            your web browser. It is used to identify your browser, provide
            analytics, remember information about you such as your language
            preference or login information.
          </li>
          <li>
            Company: when this policy mentions “Company,” “we,” “us,” or “our,”
            it refers to Dignite Studios , (3505 Lake Lynda Drive Suite 200,
            Orlando, FL 32817 ), that is responsible for your information under
            this Privacy Policy.
          </li>
          <li>
            Country: where Dignite Studios or the owners/founders of Dignite
            Studios are based, in this case is United States
          </li>
          <li>
            Customer: refers to the company, organization or person that signs
            up to use the Dignite Studios Service to manage the relationships
            with your consumers or service users.
          </li>
          <li>
            Device: any internet connected device such as a phone, tablet,
            computer or any other device that can be used to visit Dignite
            Studios and use the services.
          </li>
          <li>
            IP address: Every device connected to the Internet is assigned a
            number known as an Internet protocol (IP) address. These numbers are
            usually assigned in geographic blocks. An IP address can often be
            used to identify the location from which a device is connecting to
            the Internet.
          </li>
          <li>
            Personnel: refers to those individuals who are employed by Dignite
            Studios or are under contract to perform a service on behalf of one
            of the parties.
          </li>
          <li>
            Personal Data: any information that directly, indirectly, or in
            connection with other information — including a personal
            identification number — allows for the identification or
            identifiability of a natural person.
          </li>
          <li>
            Service: refers to the service provided by Dignite Studios as
            described in the relative terms (if available) and on this platform.
          </li>
          <li>
            Third-party service: refers to advertisers, contest sponsors,
            promotional and marketing partners, and others who provide our
            content or whose products or services we think may interest you.
          </li>
          <li>
            Website: Dignite Studios’s site, which can be accessed via this URL:
            https://dignitestudios.com/
          </li>
          <li>
            You: a person or entity that is registered with Dignite Studios to
            use the Services.
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-5">
          <span>What Information Do We Collect?</span>
        </h3>
        <p className="text-md font-medium my-3">
          We collect information from you when you visit our website, register
          on our site, place an order, subscribe to our newsletter, respond to a
          survey or fill out a form.
        </p>
        <ul className="ml-4 list-disc flex flex-col gap-y-2">
          <li>Name / Username</li>
          <li>Phone Numbers</li>
          <li>Email Addresses</li>
          <li>Mailing Addresses</li>
        </ul>

        <h3 className="text-xl font-bold mt-5">
          <span>
            When does Dignite Studios use end user information from third
            parties?
          </span>
        </h3>
        <p className="text-md font-medium mt-3">
          Dignite Studios will collect End User Data necessary to provide the
          Dignite Studios services to our customers. End users may voluntarily
          provide us with information they have made available on social media
          websites. If you provide us with any such information, we may collect
          publicly available information from the social media websites you have
          indicated. You can control how much of your information social media
          websites make public by visiting these websites and changing your
          privacy settings.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>
            When does Dignite Studios use customer information from third
            parties?
          </span>
        </h3>
        <p className="text-md font-medium mt-3">
          We receive some information from the third parties when you contact
          us. For example, when you submit your email address to us to show
          interest in becoming a Dignite Studios customer, we receive
          information from a third party that provides automated fraud detection
          services to Dignite Studios. We also occasionally collect information
          that is made publicly available on social media websites. You can
          control how much of your information social media websites make public
          by visiting these websites and changing your privacy settings.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>
            Do we share the information we collect with third parties?
          </span>
        </h3>
        <p className="text-md font-medium mt-3">
          We may share the information that we collect, both personal and
          non-personal, with third parties such as advertisers, contest
          sponsors, promotional and marketing partners, and others who provide
          our content or whose products or services we think may interest you.
          We may also share it with our current and future affiliated companies
          and business partners, and if we are involved in a merger, asset sale
          or other business reorganization, we may also share or transfer your
          personal and non-personal information to our successors-in-interest.
          <br />
          <br />
          We may engage trusted third party service providers to perform
          functions and provide services to us, such as hosting and maintaining
          our servers and the website, database storage and management, e-mail
          management, storage marketing, credit card processing, customer
          service and fulfilling orders for products and services you may
          purchase through the website. We will likely share your personal
          information, and possibly some non-personal information, with these
          third parties to enable them to perform these services for page 3/8 us
          and for you.
          <br />
          <br />
          We may share portions of our log file data, including IP addresses,
          for analytics purposes with third parties such as web analytics
          partners, application developers, and ad networks. If your IP address
          is shared, it may be used to estimate general location and other
          technographics such as connection speed, whether you have visited the
          website in a shared location, and type of the device used to visit the
          website. They may aggregate information about our advertising and what
          you see on the website and then provide auditing, research and
          reporting for us and our advertisers.
          <br />
          <br />
          We may also disclose personal and non-personal information about you
          to government or law enforcement officials or private parties as we,
          in our sole discretion, believe necessary or appropriate in order to
          respond to claims, legal process (including subpoenas), to protect our
          rights and interests or those of a third party, the safety of the
          public or any person, to prevent or stop any illegal, unethical, or
          legally actionable activity, or to otherwise comply with applicable
          court orders, laws, rules and regulations.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>
            Where and when is information collected from customers and end
            users?
          </span>
        </h3>
        <p className="text-md font-medium mt-3">
          Dignite Studios will collect personal information that you submit to
          us. We may also receive personal information about you from third
          parties as described above.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>How Do We Use The Information We Collect?</span>
        </h3>
        <p className="text-md font-medium my-3">
          Any of the information we collect from you may be used in one of the
          following ways:
        </p>
        <ul className="ml-4 list-disc flex flex-col gap-y-2">
          <li>
            To personalize your experience (your information helps us to better
            respond to your individual needs)
          </li>
          <li>
            To improve our website (we continually strive to improve our website
            offerings based on the information and feedback we receive from you)
          </li>
          <li>
            To improve customer service (your information helps us to more
            effectively respond to your customer service requests and support
            needs)
          </li>
          <li>To process transactions</li>
          <li>
            To administer a contest, promotion, survey or other site feature
          </li>
          <li>To send periodic emails</li>
        </ul>

        <h3 className="text-xl font-bold mt-5">
          <span>How Do We Use Your Email Address?</span>
        </h3>
        <p className="text-md font-medium mt-3">
          By submitting your email address on this website, you agree to receive
          emails from us. You can cancel your participation in any of these
          email lists at any time by clicking on the opt-out link or other
          unsubscribe option that is included in the respective email. We only
          send emails to people who have authorized us to contact them, either
          directly, or through a third party. We do not send unsolicited
          commercial emails, because we hate spam as much as you do. By
          submitting your email address, you also agree to allow us to use your
          email address for customer audience targeting on sites like Facebook,
          where we display custom advertising to specific people who have
          opted-in to receive communications from us. Email addresses submitted
          only through the order processing page will be used for the sole
          purpose of sending you information and updates pertaining to your
          order. If, however, you have provided the same email to us through
          another method, we may use it for any of the purposes stated in this
          Policy. Note: If at any time you would like to unsubscribe page 4/8
          from receiving future emails, we include detailed unsubscribe
          instructions at the bottom of each email.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>How Long Do We Keep Your Information?</span>
        </h3>
        <p className="text-md font-medium mt-3">
          We keep your information only so long as we need it to provide Dignite
          Studios to you and fulfill the purposes described in this policy. This
          is also the case for anyone that we share your information with and
          who carries out services on our behalf. When we no longer need to use
          your information and there is no need for us to keep it to comply with
          our legal or regulatory obligations, we’ll either remove it from our
          systems or depersonalize it so that we can't identify you.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>How Do We Protect Your Information?</span>
        </h3>
        <p className="text-md font-medium mt-3">
          We implement a variety of security measures to maintain the safety of
          your personal information when you place an order or enter, submit, or
          access your personal information. We offer the use of a secure server.
          All supplied sensitive/credit information is transmitted via Secure
          Socket Layer (SSL) technology and then encrypted into our Payment
          gateway providers database only to be accessible by those authorized
          with special access rights to such systems, and are required to keep
          the information confidential. After a transaction, your private
          information (credit cards, social security numbers, financials, etc.)
          is never kept on file. We cannot, however, ensure or warrant the
          absolute security of any information you transmit to Dignite Studios
          or guarantee that your information on the Service may not be accessed,
          disclosed, altered, or destroyed by a breach of any of our physical,
          technical, or managerial safeguards.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>Could my information be transferred to other countries?</span>
        </h3>
        <p className="text-md font-medium mt-3">
          Dignite Studios is incorporated in United States. Information
          collected via our website, through direct interactions with you, or
          from use of our help services may be transferred from time to time to
          our offices or personnel, or to third parties, located throughout the
          world, and may be viewed and hosted anywhere in the world, including
          countries that may not have laws of general applicability regulating
          the use and transfer of such data. To the fullest extent allowed by
          applicable law, by using any of the above, you voluntarily consent to
          the trans-border transfer and hosting of such information.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>
            Is the information collected through the Dignite Studios Service
            secure?
          </span>
        </h3>
        <p className="text-md font-medium mt-3">
          We take precautions to protect the security of your information. We
          have physical, electronic, and managerial procedures to help
          safeguard, prevent unauthorized access, maintain data security, and
          correctly use your information. However, neither people nor security
          systems are foolproof, including encryption systems. In addition,
          people can commit intentional crimes, make mistakes or fail to follow
          policies. Therefore, while we use reasonable efforts to protect your
          personal information, we cannot guarantee its absolute security. If
          applicable law imposes any non-disclaimable duty to protect your
          personal information, you agree that intentional misconduct will be
          the standards used to measure our compliance with that duty.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>Can I update or correct my information?</span>
        </h3>
        <p className="text-md font-medium mt-3">
          The rights you have to request updates or corrections to the
          information Dignite Studios collects depend on your relationship with
          Dignite Studios. Personnel may update or correct their information as
          detailed in our internal company employment policies. <br />
          <br />
          Customers have the right to request the restriction of certain uses
          and disclosures of personally identifiable information as follows. You
          can contact us in order to (1) update or correct your personally
          identifiable information, (2) change your preferences with respect to
          communications and other information you receive from us, or (3)
          delete the personally identifiable information maintained about you on
          our systems (subject to the following paragraph), by cancelling your
          account. Such updates, corrections, changes and deletions will have no
          effect on other information that we maintain, or information that we
          have provided to third parties in accordance with this Privacy Policy
          prior to such update, correction, change or deletion. To protect your
          privacy and security, we may take reasonable steps (such as requesting
          a unique password) to verify your identity before granting you profile
          access or making corrections. You are responsible for maintaining the
          secrecy of your unique password and account information at all times.
          <br />
          <br />
          You should be aware that it is not technologically possible to remove
          each and every record of the information you have provided to us from
          our system. The need to back up our systems to protect information
          from inadvertent loss means that a copy of your information may exist
          in a non-erasable form that will be difficult or impossible for us to
          locate. Promptly after receiving your request, all personal
          information stored in databases we actively use, and other readily
          searchable media will be updated, corrected, changed or deleted, as
          appropriate, as soon as and to the extent reasonably and technically
          practicable.
          <br />
          <br />
          If you are an end user and wish to update, delete, or receive any
          information we have about you, you may do so by contacting the
          organization of which you are a customer.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>Personnel</span>
        </h3>
        <p className="text-md font-medium mt-3">
          If you are a Dignite Studios worker or applicant, we collect
          information you voluntarily provide to us. We use the information
          collected for Human Resources purposes in order to administer benefits
          to workers and screen applicants. <br />
          <br />
          You may contact us in order to (1) update or correct your information,
          (2) change your preferences with respect to communications and other
          information you receive from us, or (3) receive a record of the
          information we have relating to you. Such updates, corrections,
          changes and deletions will have no effect on other information that we
          maintain, or information that we have provided to third parties in
          accordance with this Privacy Policy prior to such update, correction,
          change or deletion.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>Sale of Business</span>
        </h3>
        <p className="text-md font-medium mt-3">
          We reserve the right to transfer information to a third party in the
          event of a sale, merger or other transfer of all or substantially all
          of the assets of Dignite Studios or any of its Corporate Affiliates
          (as defined herein), or that portion of Dignite Studios or any of its
          Corporate Affiliates to which the Service relates, or in the event
          that we discontinue our business or file a petition or have filed
          against us a petition in bankruptcy, reorganization or similar
          proceeding, provided that the third party agrees to adhere to the
          terms of this Privacy Policy.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>Affiliates</span>
        </h3>
        <p className="text-md font-medium mt-3">
          We may disclose information (including personal information) about you
          to our Corporate Affiliates. For page 6/8 purposes of this Privacy
          Policy, "Corporate Affiliate" means any person or entity which
          directly or indirectly controls, is controlled by or is under common
          control with Dignite Studios, whether by ownership or otherwise. Any
          information relating to you that we provide to our Corporate
          Affiliates will be treated by those Corporate Affiliates in accordance
          with the terms of this Privacy Policy.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>Governing Law</span>
        </h3>
        <p className="text-md font-medium mt-3">
          This Privacy Policy is governed by the laws of United States without
          regard to its conflict of laws provision. You consent to the exclusive
          jurisdiction of the courts in connection with any action or dispute
          arising between the parties under or in connection with this Privacy
          Policy except for those individuals who may have rights to make claims
          under Privacy Shield, or the Swiss-US framework.
          <br />
          <br />
          The laws of United States, excluding its conflicts of law rules, shall
          govern this Agreement and your use of the website. Your use of the
          website may also be subject to other local, state, national, or
          international laws.
          <br />
          <br />
          By using Dignite Studios or contacting us directly, you signify your
          acceptance of this Privacy Policy. If you do not agree to this Privacy
          Policy, you should not engage with our website, or use our services.
          Continued use of the website, direct engagement with us, or following
          the posting of changes to this Privacy Policy that do not
          significantly affect the use or disclosure of your personal
          information will mean that you accept those changes.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>Your Consent</span>
        </h3>
        <p className="text-md font-medium mt-3">
          We've updated our Privacy Policy to provide you with complete
          transparency into what is being set when you visit our site and how
          it's being used. By using our Dignite Studios, registering an account,
          or making a purchase, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>Links to Other Websites</span>
        </h3>
        <p className="text-md font-medium mt-3">
          This Privacy Policy applies only to the Services. The Services may
          contain links to other websites not operated or controlled by Dignite
          Studios. We are not responsible for the content, accuracy or opinions
          expressed in such websites, and such websites are not investigated,
          monitored or checked for accuracy or completeness by us. Please
          remember that when you use a link to go from the Services to another
          website, our Privacy Policy is no longer in effect. Your browsing and
          interaction on any other website, including those that have a link on
          our platform, is subject to that website’s own rules and policies.
          Such third parties may use their own cookies or other methods to
          collect information about you.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>Cookies</span>
        </h3>
        <p className="text-md font-medium mt-3">
          Dignite Studios uses "Cookies" to identify the areas of our website
          that you have visited. A Cookie is a small piece of data stored on
          your computer or mobile device by your web browser. We use Cookies to
          enhance the performance and functionality of our website but are
          non-essential to their use. However, without these cookies, certain
          functionality like videos may become unavailable or you would be
          required to enter your login details every time you visit the website
          as we would not be able to remember that you had logged in previously.
          Most web browsers can be set to disable the use of Cookies. However,
          if you disable Cookies, you may not be able to access functionality on
          our website correctly or at all. We never place Personally
          Identifiable Information in Cookies.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>Blocking and disabling cookies and similar technologies</span>
        </h3>
        <p className="text-md font-medium mt-3">
          Wherever you're located you may also set your browser to block cookies
          and similar technologies, but this action may block our essential
          cookies and prevent our website from functioning properly, and you may
          not be able to fully utilize all of its features and services. You
          should also be aware that you may also lose some saved information
          (e.g. saved login details, site preferences) if you block cookies on
          your browser. Different browsers make different controls available to
          you. Disabling a cookie or category of cookie does not delete the
          cookie from your browser, you will need to do this yourself from
          within your browser, you should visit your browser's help menu for
          more information.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>Changes To Our Privacy Policy</span>
        </h3>
        <p className="text-md font-medium mt-3">
          We may change our Service and policies, and we may need to make
          changes to this Privacy Policy so that they accurately reflect our
          Service and policies. Unless otherwise required by law, we will notify
          you (for example, through our Service) before we make changes to this
          Privacy Policy and give you an opportunity to review them before they
          go into effect. Then, if you continue to use the Service, you will be
          bound by the updated Privacy Policy. If you do not want to agree to
          this or any updated Privacy Policy, you can delete your account.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>Third-Party Services</span>
        </h3>
        <p className="text-md font-medium mt-3">
          We may display, include or make available third-party content
          (including data, information, applications and other products
          services) or provide links to third-party websites or services
          ("Third- Party Services"). <br />
          <br />
          You acknowledge and agree that Dignite Studios shall not be
          responsible for any Third-Party Services, including their accuracy,
          completeness, timeliness, validity, copyright compliance, legality,
          decency, quality or any other aspect thereof. Dignite Studios does not
          assume and shall not have any liability or responsibility to you or
          any other person or entity for any Third-Party Services. <br />
          <br />
          Third-Party Services and links thereto are provided solely as a
          convenience to you and you access and use them entirely at your own
          risk and subject to such third parties' terms and conditions.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>Facebook Pixel</span>
        </h3>
        <p className="text-md font-medium mt-3">
          Facebook pixel is an analytics tool that allows you to measure the
          effectiveness of your advertising by page 8/8 understanding the
          actions people take on your website/app. You can use the pixel to:
          Make sure your ads are shown to the right people. Facebook pixel may
          collect information from your device when you use the service.
          Facebook pixel collects information that is held in accordance with
          its Privacy Policy.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>Tracking Technologies</span>
        </h3>
        <ul className="ml-4 list-disc mt-3">
          <li>Local Storage</li>
        </ul>
        <p className="text-md font-medium mt-3">
          Local Storage sometimes known as DOM storage, provides web apps with
          methods and protocols for storing client-side data. Web storage
          supports persistent data storage, similar to cookies but with a
          greatly enhanced capacity and no information stored in the HTTP
          request header.
        </p>

        <h3 className="text-xl font-bold mt-5">
          <span>Contact Us</span>
        </h3>
        <p className="text-md font-medium my-3">
          Don't hesitate to contact us if you have any questions.
        </p>
        <ul className="ml-4 list-disc flex flex-col gap-y-2">
          <li>
            Via Email:{" "}
            <Link href={"mailto:info@dignitestudios.com"} target="_blank">
              info@dignitestudios.com
            </Link>
          </li>
          <li>
            Via Phone Number:{" "}
            <Link href={"tel:877-714-1770"} target="_blank">877-714-1770</Link>
          </li>
          <li>
            Via this Link:{" "}
            <Link href={"https://dignitestudios.com/"} target="_blank">
              https://dignitestudios.com/
            </Link>
          </li>
          <li>
            Via this Address: 3505 Lake Lynda Drive Suite 200, Orlando, FL 32817
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
