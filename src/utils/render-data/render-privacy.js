const email = "support@tab-is.ru";

export const privacy = [
  {
    title: "Definitions",
    tag: "terms",
    items: [
      <>
        <p>
          <strong>Personal Data</strong> means any information relating to an
          identified or identifiable natural person.
        </p>
        <p>
          <strong>User</strong> means a person who has registered on the
          website/web interface and uses the Service to create and manage tasks.
        </p>
        <p>
          <strong>Employee</strong> means an individual who performs tasks
          received through the Service’s Telegram bot.
        </p>
        <p>
          <strong>Service Telegram Bot</strong> means a software module within
          Telegram through which Employees receive tasks and submit photo
          confirmations or other responses.
        </p>
        <p>
          <strong>AI Processing</strong> means the automated analysis of
          Employee-submitted photos by an external artificial intelligence
          service for the purpose of determining whether a task has been
          completed in accordance with the required condition.
        </p>
      </>,
    ],
  },
  {
    title: "Categories of Personal Data We Process",
    tag: "personal-data",
    items: [
      <>
        User Data:
        <ul className="list-disc ml-6">
          <li>full name;</li>
          <li>email address;</li>
          <li>password (stored in hashed form);</li>
          <li>organization or company information, if provided;</li>
          <li>transaction history and actions performed within the Service.</li>
        </ul>
      </>,
      <>
        Employee Data:
        <ul className="list-disc ml-6">
          <li>name, if specified by the User or manager;</li>
          <li>job title or role;</li>
          <li>Telegram ID;</li>
          <li>Telegram username;</li>
          <li>
            photos submitted through the Telegram bot as proof of task
            completion;
          </li>
          <li>text replies and checklist responses, where applicable;</li>
          <li>task completion history and response timestamps.</li>
        </ul>
      </>,
      <>
        Technical Data:
        <ul className="list-disc ml-6">
          <li>IP address;</li>
          <li>browser or application data;</li>
          <li>information about interactions with the Service interfaces.</li>
        </ul>
      </>,
      <>
        Data Processed by Third-Party Services:
        <ul className="list-disc ml-6">
          <li>Google Analytics — analytics and usage data;</li>
          <li>
            Stripe or other payment providers — payment and transaction data;
          </li>
          <li>
            email delivery or SMTP providers — support and service
            communications;
          </li>
          <li>Telegram — messages, photos, and related technical metadata;</li>
          <li>OpenAI — photo analysis and AI-assisted task verification.</li>
        </ul>
      </>,
    ],
  },
  {
    title: "Purposes of Processing Personal Data",
    tag: "purposes",
    items: [
      <>
        Personal Data is processed for the following purposes:
        <ul className="list-disc ml-6">
          <li>
            providing the functionality of the Service to Users and Employees;
          </li>
          <li>creating, assigning, managing, and completing tasks;</li>
          <li>identifying Employees within the Service;</li>
          <li>AI processing of photos to verify task completion;</li>
          <li>
            sending notifications and task-related communications through
            Telegram;
          </li>
          <li>performing contractual obligations;</li>
          <li>
            maintaining security and preventing fraud, abuse, or unauthorized
            access;
          </li>
          <li>responding to user requests, inquiries, and support messages;</li>
          <li>
            improving the Service, website performance, and user experience;
          </li>
          <li>complying with applicable legal obligations.</li>
        </ul>
      </>,
    ],
  },
  {
    title: "Data Storage",
    tag: "storage",
    items: [
      <>
        <ul className="list-disc ml-6">
          <li>
            Data is stored using infrastructure and service providers selected
            by the Service operator. Certain data may be processed in different
            jurisdictions depending on the technical setup of the Service and
            the providers involved.
          </li>
          <li>
            The operator implements reasonable technical and organizational
            security measures designed to protect Personal Data from
            unauthorized access, loss, misuse, alteration, or disclosure.
          </li>
          <li>
            Photos submitted by Employees may be processed through Telegram and
            made available within the Service interface for reporting, review,
            and task verification purposes.
          </li>
        </ul>
      </>,
    ],
  },
  {
    title: "International Transfers of Personal Data",
    tag: "transfers",
    items: [
      "The Service uses Telegram infrastructure and AI processing services, which may operate outside the country in which the User or Employee is located.",
      <>
        As part of providing the Service, Employee data, including photos and
        task-related responses, may be transferred to or processed in countries
        that may have different data protection standards than the country of
        origin.
      </>,
      <>
        The User is responsible for ensuring that they have an appropriate legal
        basis to provide Employee data to the Service and, where required under
        applicable law, for obtaining any necessary employee notices, consents,
        or authorizations for such processing and transfer.
      </>,
      <>
        Such transfers are carried out only for specific Service functions,
        including:
        <ul className="list-disc ml-6">
          <li>delivery of messages and tasks through Telegram;</li>
          <li>analysis of photos by an AI model for task verification.</li>
        </ul>
      </>,
    ],
  },
  {
    title: "Processing Procedures and Conditions",
    tag: "processing",
    items: [
      "Personal Data is processed on the basis of applicable legal grounds, which may include consent, performance of a contract, legitimate interests, legal obligations, and customer instructions where the Service is used in relation to Employees.",
      <>
        The operator does not publish or disclose Personal Data to third parties
        except in the following cases:
        <ul className="list-disc ml-6">
          <li>AI-based analysis and task verification;</li>
          <li>payment processing through payment providers;</li>
          <li>compliance with legal obligations or lawful requests.</li>
        </ul>
      </>,
      "The operator does not verify the accuracy of data provided by the User.",
      "The User is responsible for ensuring that they have the necessary rights and permissions to provide Employee data to the Service.",
    ],
  },
  {
    title: "Rights of the Data Subject",
    tag: "rights",
    items: [
      <>
        Depending on applicable law, the data subject may have the right:
        <ul className="list-disc ml-6">
          <li>to obtain information about the processing of their data;</li>
          <li>to request correction, update, or deletion of their data;</li>
          <li>to withdraw consent where processing is based on consent;</li>
          <li>to request restriction of processing;</li>
          <li>to object to certain types of processing;</li>
          <li>to request access to their Personal Data.</li>
        </ul>
        <br />
        Requests may be sent to {email}.
      </>,
    ],
  },
  {
    title: "Processing Periods",
    tag: "periods",
    items: [
      <>
        Personal Data is processed until:
        <ul className="list-disc ml-6">
          <li>the use of the Service is terminated;</li>
          <li>the account is deleted;</li>
          <li>consent is withdrawn, where applicable;</li>
          <li>
            or the relevant data is no longer needed for the purposes for which
            it was collected.
          </li>
        </ul>
        Deletion requests are handled within a reasonable period, normally no
        later than 30 days, unless a longer retention period is required by law
        or justified by operational necessity.
      </>,
    ],
  },
  {
    title: "Protection of Personal Data",
    tag: "security",
    items: [
      <>
        The operator applies reasonable security measures, which may include:
        <ul className="list-disc ml-6">
          <li>DDoS protection tools;</li>
          <li>encryption where appropriate;</li>
          <li>protection of data transmission channels;</li>
          <li>access restrictions;</li>
          <li>logging and monitoring of actions within the Service.</li>
        </ul>
      </>,
    ],
  },
  {
    title: "Use of Cookies and Analytics",
    tag: "cookies",
    items: [
      <>
        The website uses analytics and similar technologies:
        <ul className="list-disc ml-6">
          <li>
            <strong>Google Analytics:</strong> collection of usage and analytics
            data to better understand user behavior and improve the website and
            Service.
          </li>
          <li>
            Cookies may be used for authentication, session management, website
            functionality, and performance improvement.
          </li>
        </ul>
        Where required by applicable law, consent will be requested before
        non-essential cookies are used.
      </>,
    ],
  },
  {
    title: "Changes to This Policy",
    tag: "change",
    items: [
      "This Policy may be updated from time to time. The current version is published on the website.",
    ],
  },
  {
    title: "Operator Contact Information",
    tag: "contacts",
    items: [
      <>
        Email: <strong>{email}</strong>
        <br />
        Operator: <strong>Sole Proprietor Andrey Sergeevich Melkov</strong>
        <br />
        Registered address: 28 Pobedy Avenue, Apt. 57, Simferopol, Republic of
        Crimea, 295034, Russia
      </>,
    ],
  },
];
