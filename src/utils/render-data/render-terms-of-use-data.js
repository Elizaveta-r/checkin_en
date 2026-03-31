const FREE_EMPLOYEE_LIMIT = 5;
const START_EMPLOYEE_LIMIT = 10;
const STANDARD_EMPLOYEE_LIMIT = 25;

const START_PRICE = "$ 36"; // "RUB 2,990";
const STANDARD_PRICE = "$ 62"; // "RUB 4,990";
const EXTRA_EMPLOYEE_SLOT_PRICE = "$ 2"; // "RUB 150";

const PAYMENT_PROVIDER = "Stripe";

export const terms = [
  {
    title: "Definitions",
    tag: "terms",
    items: [
      <>
        <p>
          <strong>Service</strong> means the software product “CheckIn”,
          including the web interface for managers and the Telegram bot used by
          Employees to receive tasks and submit reports.
        </p>
        <p>
          <strong>User</strong> means any legal entity or individual that has
          registered with the Service and uses it to manage tasks and Employees.
        </p>
        <p>
          <strong>Employee</strong> means an individual whose data is added to
          the Service by the User.
        </p>
        <p>
          <strong>Telegram Bot</strong> means the Telegram-based software module
          used by the Service to exchange information with Users and Employees.
        </p>
        <p>
          <strong>Telegram ID</strong> means a unique Telegram user identifier
          required for delivering messages to the correct recipient and linking
          Employee actions within the Service.
        </p>
        <p>
          <strong>AI Processing</strong> means the automated processing of
          images and other related data using machine learning technologies for
          the purpose of analyzing photos submitted as proof of task completion.
        </p>
        <p>
          <strong>Plan</strong> means a set of Service features made available
          to the User on a paid or free basis.
        </p>
      </>,
    ],
  },
  {
    title: "Scope of the Terms",
    tag: "subject",
    items: [
      <>
        The operator provides the User with access to the Service for the
        following purposes:
        <ul className="list-disc ml-6">
          <li>task management,</li>
          <li>employee management,</li>
          <li>interaction through the Telegram Bot,</li>
          <li>receipt and processing of photos,</li>
          <li>use of AI Processing, where included in the selected Plan.</li>
        </ul>
      </>,
      "The scope and availability of features depend on the selected Plan.",
    ],
  },
  {
    title: "Data Processed Through the Service",
    tag: "data",
    items: [
      <>
        When using the Service, the User may upload and process Employee-related
        data, including:
        <ul className="list-disc ml-6">
          <li>full name, where provided;</li>
          <li>job title or role;</li>
          <li>Telegram username;</li>
          <li>Telegram ID;</li>
          <li>
            photos submitted by Employees through the Telegram Bot when
            confirming task completion.
          </li>
        </ul>
      </>,
      "Under Plans that include AI Processing, Employee photos may be analyzed by automated systems for the purpose of determining whether a task has been completed.",
      "The User is responsible for ensuring that they have a valid legal basis to collect, submit, and process Employee data through the Service, including providing any required notices and obtaining any required consents under applicable law.",
      "The User acknowledges that, with respect to Employee data submitted to the Service, the User acts as the party responsible for determining the purposes and means of such processing and remains responsible for the lawfulness of collecting and sharing that data with the Service.",
    ],
  },
  {
    title: "Account Registration and Use",
    tag: "registration",
    items: [
      "To access the Service web interface, the User must register using an email address. Registration is available to any person or organization wishing to use the Service to organize tasks and manage Employees.",
      "A registered User creates and manages their own workspace within the Service, where they can add and manage Employees.",
      <>
        Employee interaction with the Service, including receiving tasks,
        submitting reports, and sending photos, is carried out{" "}
        <strong>exclusively through the Service’s Telegram Bot</strong>.
      </>,
      "Connecting the Telegram Bot is a required condition for using Employee-related Service functionality. Without the Telegram Bot, Employee-related functionality is unavailable.",
      "The User is responsible for accurately entering the Employee data required for the Telegram Bot to function, including Telegram username and Telegram ID.",
      "Employees do not register through the web interface. They are identified solely through the Service’s Telegram Bot based on their Telegram ID.",
      "Employee-related functionality depends on the availability of Telegram, its API, and related infrastructure. The operator is not responsible for limitations, restrictions, outages, or failures attributable to Telegram or other third-party platforms.",
    ],
  },
  {
    title: "Plans and Payment",
    tag: "tariffs",
    items: [
      <>
        The following Service Plans are available:
        <ul className="list-disc ml-6">
          <li>
            <strong>Free</strong> — up to {FREE_EMPLOYEE_LIMIT} Employees,
            unlimited tasks, departments, and roles, Telegram Bot integration,
            without AI-based task verification <strong>(free of charge)</strong>
            .
          </li>
          <li>
            <strong>Starter</strong> — up to {START_EMPLOYEE_LIMIT} Employees,
            unlimited tasks, departments, and roles, Telegram Bot integration,
            including AI-based task verification{" "}
            <strong>({START_PRICE})</strong>.
          </li>
          <li>
            <strong>Standard</strong> — up to {STANDARD_EMPLOYEE_LIMIT}{" "}
            Employees, unlimited tasks, departments, and roles, Telegram Bot
            integration, including AI-based task verification{" "}
            <strong>({STANDARD_PRICE})</strong>.
          </li>
        </ul>
      </>,
      <>
        The User may also purchase additional Employee slots without upgrading
        to another paid Plan.{" "}
        <strong>({EXTRA_EMPLOYEE_SLOT_PRICE} per slot)</strong>
      </>,
      "The operator may change the pricing of Plans and additional Employee slots from time to time, with prior notice provided through the Service interface or by email.",
      `Payments are processed through ${PAYMENT_PROVIDER} or another payment provider made available by the Service. The operator does not store the User’s full payment card details.`,
    ],
  },
  {
    title: "Rights and Responsibilities of the Parties",
    tag: "rights",
    items: [
      <>
        <strong>The User agrees to:</strong>
        <ul className="list-disc ml-6">
          <li>use the Service in compliance with applicable law;</li>
          <li>
            keep account access credentials secure and not share them with
            unauthorized third parties;
          </li>
          <li>provide accurate and up-to-date information;</li>
          <li>
            ensure that any required legal basis, notices, or consents exist for
            the processing of Employee personal data through the Service.
          </li>
        </ul>
      </>,
      <>
        <strong>The operator may:</strong>
        <ul className="list-disc ml-6">
          <li>modify or update the functionality of the Service;</li>
          <li>update Plans, pricing, and feature availability;</li>
          <li>
            restrict or suspend access in the event of a violation of these
            Terms.
          </li>
        </ul>
      </>,
    ],
  },
  {
    title: "Data Processing and Storage",
    tag: "processing",
    items: [
      <>
        Data processed through the Service, including information relating to
        Users, Employees, and task-related materials, may be stored and
        processed using infrastructure and service providers selected by the
        operator.
      </>,
      "The operator applies reasonable technical and organizational measures designed to protect personal data and other Service-related information against unauthorized access, loss, misuse, alteration, or disclosure.",
      "Employee data processed using AI functionality may involve the transfer of images and related information to external service providers located in other jurisdictions.",
      "The User is responsible for ensuring that any such processing and transfer is lawful under applicable law and that any required notices or consents have been obtained before using the relevant functionality of the Service.",
    ],
  },
  {
    title: "Limitation of Liability",
    tag: "liability",
    items: [
      "The operator takes reasonable measures to maintain the availability and reliability of the Service, but does not guarantee uninterrupted or error-free operation.",
      "The operator is not responsible for limitations, failures, or interruptions affecting third-party services, including Telegram and other external platforms or providers used in connection with the Service.",
      "The operator is not responsible for inaccuracies, incompleteness, or unlawfulness of data submitted by the User.",
      "The operator does not guarantee absolute accuracy of AI Processing results. The User remains responsible for reviewing task outcomes and making final business or operational decisions based on those results.",
    ],
  },
  {
    title: "Intellectual Property",
    tag: "intellectual-property",
    items: [
      "The Service and all of its interface elements, software components, and related materials are the intellectual property of the operator or its licensors. The User is granted a limited, non-exclusive, non-transferable right to use the Service solely in accordance with these Terms.",
    ],
  },
  {
    title: "Changes to the Terms",
    tag: "changes",
    items: [
      "The operator may amend these Terms from time to time.",
      "The current version of the Terms will be published on the Service website or otherwise made available through the Service.",
    ],
  },
  {
    title: "Use of Third-Party Services",
    tag: "third-party",
    items: [
      "The Service relies on third-party services and infrastructure, including Telegram for messaging and photo delivery, AI-based image analysis services, payment providers, email delivery services, and analytics systems.",
      "By using the Service, the User acknowledges that certain functionality depends on such third-party services and may also be subject to the applicable terms, policies, and technical limitations of those providers.",
      "The operator is not responsible for the operation, availability, security, or restrictions of third-party services.",
    ],
  },
  {
    title: "Final Provisions",
    tag: "conclusion",
    items: [
      "These Terms are governed by and construed in accordance with the laws applicable to the operator, unless otherwise required by mandatory law in the User’s jurisdiction.",
      "Any matters not expressly governed by these Terms shall be resolved in accordance with applicable law.",
      "By using the Service, the User confirms that they have read, understood, and agreed to these Terms.",
    ],
  },
];
