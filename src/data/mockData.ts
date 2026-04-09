import { StudyTopic, QuizQuestion, CaseStudy } from '../types';

export const studyTopics: StudyTopic[] = [
  {
    id: '1',
    title: 'The FATF Recommendations',
    category: 'International Standards',
    description: 'Detailed overview of the 40 Recommendations by the Financial Action Task Force.',
    content: `
      The Financial Action Task Force (FATF) is the global money laundering and terrorist financing watchdog. 
      The FATF Recommendations are the international standards for combating money laundering and the financing of terrorism and proliferation.
      
      ### Key Areas:
      1. **AML/CFT Policies and Coordination**: Countries should identify, assess, and understand their risks.
      2. **Money Laundering and Confiscation**: Countries should criminalize money laundering on the basis of the Vienna Convention and the Palermo Convention.
      3. **Terrorist Financing and Financing of Proliferation**: Countries should criminalize terrorist financing.
      4. **Preventive Measures**: Financial institutions and designated non-financial businesses and professions (DNFBPs) should implement customer due diligence (CDD).
      
      ### The 40 Recommendations Structure:
      - **Group I (1-2)**: AML/CFT Policies and Coordination.
      - **Group II (3-4)**: Money Laundering and Confiscation.
      - **Group III (5-8)**: Terrorist Financing and Financing of Proliferation.
      - **Group IV (9-23)**: Financial and Non-Financial Institution Preventative Measures.
      - **Group V (24-25)**: Transparency and Beneficial Ownership of Legal Persons and Arrangements.
      - **Group VI (26-35)**: Powers and Responsibilities of Competent Authorities and Other Institutional Measures.
      - **Group VII (36-40)**: International Cooperation.
    `
  },
  {
    id: '2',
    title: 'Three Stages of Money Laundering',
    category: 'Financial Crimes',
    description: 'Understanding the cycle of Placement, Layering, and Integration.',
    content: `
      Money laundering is commonly described as occurring in three distinct stages:
      
      1. **Placement**: The physical disposal of cash or other assets derived from criminal activity. This is the point where "dirty money" first enters the financial system. Examples include blending of funds (commingling), purchasing stored value cards, and structuring deposits.
      2. **Layering**: The separation of illicit proceeds from their source by layers of financial transactions intended to conceal the origin of the proceeds. This involves moving funds through complex layers of transactions (e.g., wire transfers, shell companies, investing in real estate) to obscure the audit trail.
      3. **Integration**: Supplying apparent legitimacy to illicit wealth through the reentry of the funds into the economy in what appears to be normal business or personal transactions. Examples include purchasing luxury assets, entering into financial arrangements, or buying companies.
    `
  },
  {
    id: '3',
    title: 'Customer Due Diligence (CDD)',
    category: 'Compliance Programs',
    description: 'Understanding the requirements for identifying and verifying customers.',
    content: `
      Customer Due Diligence (CDD) is a critical component of an effective AML program. It involves identifying the customer and verifying that customer's identity using reliable, independent source documents, data, or information.
      
      ### The Three Levels of CDD:
      1. **Standard CDD**: Normal identification and verification for most customers.
      2. **Simplified CDD (SDD)**: For low-risk customers, such as public companies or public authorities.
      3. **Enhanced Due Diligence (EDD)**: For high-risk customers, such as Politically Exposed Persons (PEPs), those from high-risk jurisdictions, or complex corporate structures.
      
      ### Main Elements of a CDD Program:
      - **Customer Identification**: Obtaining full identification of customer and business entities.
      - **Profiles**: Developing transaction and activity profiles for each customer.
      - **Customer Acceptance**: Defining and accepting the customer in the context of their use of specific products.
      - **Risk Rating**: Assessing and grading risks presented by the customer's account relationship.
      - **Monitoring**: Monitoring accounts and transactions based on the risks presented.
    `
  },
  {
    id: '4',
    title: 'Correspondent Banking',
    category: 'Compliance Programs',
    description: 'Risks and due diligence requirements for correspondent banking relationships.',
    content: `
      Correspondent banking is an arrangement whereby one bank (the correspondent) acts as the agent of another bank (the respondent) in a foreign country.
      
      ### Key Risks:
      - **Indirect Nature**: The correspondent bank provides services for individuals and entities for which it has neither verified the identities nor obtained any firsthand knowledge.
      - **Nesting**: The practice where a respondent bank provides downstream correspondent services to other financial institutions and processes these transactions through its own correspondent account.
      - **Payable-Through Accounts (PTAs)**: Transaction accounts where the respondent bank's customers are permitted to conduct their own transactions directly through the correspondent account.
      
      ### Due Diligence Requirements:
      - Identify the respondent bank's owners and understand the nature of its regulatory oversight.
      - Use the Wolfsberg Group's Correspondent Banking Due Diligence Questionnaire (CBDDQ).
      - Obtain senior management approval for new relationships.
    `
  },
  {
    id: '5',
    title: 'Politically Exposed Persons (PEPs)',
    category: 'Compliance Programs',
    description: 'Identifying and managing risks associated with PEPs.',
    content: `
      According to FATF, there are three types of politically exposed persons (PEPs):
      
      1. **Foreign PEPs**: Individuals entrusted with prominent public functions by a foreign country (e.g., heads of state, senior politicians, judicial or military officials).
      2. **Domestic PEPs**: Individuals entrusted domestically with prominent public functions.
      3. **International Organization PEPs**: Individuals entrusted with a prominent function by an international organization (e.g., directors, presidents).
      
      ### Risk Management:
      - **Enhanced Due Diligence (EDD)**: Mandatory for foreign PEPs.
      - **Approval**: Obtain senior management approval for establishing or continuing business relationships with PEPs.
      - **Source of Wealth/Funds**: Take reasonable measures to establish the source of wealth and source of funds.
      - **Ongoing Monitoring**: Conduct enhanced ongoing monitoring of the business relationship.
    `
  },
  {
    id: '6',
    title: 'International Trade Activity',
    category: 'Financial Crimes',
    description: 'Trade-Based Money Laundering (TBML) and Black Market Peso Exchange (BMPE).',
    content: `
      International trade provides numerous components that can be manipulated for illicit finance.
      
      ### Trade-Based Money Laundering (TBML):
      The process of disguising the proceeds of crime and moving value by using trade transactions to legitimize their illicit origins. Common techniques include:
      - **Overinvoicing and Underinvoicing**: Misrepresenting the price of goods to transfer value.
      - **Overshipping or Short-shipping**: Discrepancy between invoiced and shipped quantities.
      - **Ghost-shipping**: Fictitious trades where no goods are actually shipped.
      - **Multiple Invoicing**: Issuing numerous invoices for the same shipment.
      
      ### Black Market Peso Exchange (BMPE):
      A complex method of TBML originally driven by Colombia's restrictive currency policies. It involves peso brokers who purchase drug dollars in the US and use them to pay US vendors for goods ordered by Colombian importers, who then pay the broker in pesos.
    `
  },
  {
    id: '7',
    title: 'USA PATRIOT Act Key Sections',
    category: 'AML Regulations',
    description: 'Critical sections of the USA PATRIOT Act affecting international banking.',
    content: `
      The USA PATRIOT Act (2001) significantly strengthened US AML laws. Key sections include:
      
      - **Section 311**: Authority to designate a foreign jurisdiction, institution, or class of transactions as being of "primary money laundering concern."
      - **Section 312**: Requires due diligence and EDD for foreign correspondent accounts and private banking accounts for non-US persons.
      - **Section 313**: Prohibits US banks and securities brokers from maintaining correspondent accounts for foreign, unregulated shell banks.
      - **Section 314(a)**: Enables law enforcement to reach out to financial organizations to locate accounts and transactions of persons involved in terrorism or money laundering.
      - **Section 314(b)**: Allows financial organizations to share information with one another for purposes of identifying and reporting activities involving possible terrorist activity or money laundering.
      - **Section 319(a)**: Forfeiture from US correspondent accounts.
    `
  },
  {
    id: '8',
    title: 'Virtual Currency',
    category: 'Financial Crimes',
    description: 'Risks and regulations associated with virtual currencies and VASPs.',
    content: `
      Virtual currency (VC) is a digital representation of value that can be digitally traded and functions as a medium of exchange, unit of account, or store of value.
      
      ### Key Risks:
      - **Anonymity**: Potential for anonymous transactions, especially with privacy coins like Monero.
      - **Speed**: Transactions are executed within seconds across borders.
      - **Dark Web**: Frequent use for purchasing illicit goods on the darknet.
      
      ### FATF Recommendation 15:
      Requires Virtual Asset Service Providers (VASPs) to be regulated for AML/CFT purposes. This includes the **"Travel Rule"** (Recommendation 16), which requires VASPs to obtain and share accurate originator and beneficiary information for transactions.
    `
  }
];

import { QuizSet } from '../types';

export const quizSets: QuizSet[] = [
  {
    id: 'set1',
    title: 'Basics & Regulations',
    questions: [
      {
        id: '1-1',
        question: 'Which stage of money laundering involves the physical disposal of cash into the financial system?',
        options: ['Layering', 'Integration', 'Placement', 'Structuring'],
        correctAnswer: 2,
        explanation: 'Placement is the first stage, where illicit cash is introduced into the financial system.',
        category: 'Financial Crimes'
      },
      {
        id: '1-2',
        question: 'What is the term for breaking down a large cash deposit into smaller amounts to avoid reporting requirements?',
        options: ['Smurfing', 'Structuring', 'Layering', 'Integration'],
        correctAnswer: 1,
        explanation: 'Structuring involves splitting transactions to stay below reporting thresholds.',
        category: 'Financial Crimes'
      },
      {
        id: '1-3',
        question: 'Which stage of money laundering involves complex layers of financial transactions to obscure the audit trail?',
        options: ['Placement', 'Layering', 'Integration', 'Structuring'],
        correctAnswer: 1,
        explanation: 'Layering is the second stage, designed to hide the source of funds through complexity.',
        category: 'Financial Crimes'
      },
      {
        id: '1-4',
        question: 'What is the final stage of money laundering where funds re-enter the economy with apparent legitimacy?',
        options: ['Placement', 'Layering', 'Integration', 'Structuring'],
        correctAnswer: 2,
        explanation: 'Integration is the third stage, where laundered funds are used in normal business transactions.',
        category: 'Financial Crimes'
      },
      {
        id: '1-5',
        question: 'Which international body sets global standards for AML/CFT?',
        options: ['IMF', 'World Bank', 'FATF', 'United Nations'],
        correctAnswer: 2,
        explanation: 'The Financial Action Task Force (FATF) is the global standard-setter.',
        category: 'International Standards'
      },
      {
        id: '1-6',
        question: 'How many Recommendations are in the core FATF standards?',
        options: ['10', '25', '40', '50'],
        correctAnswer: 2,
        explanation: 'FATF is known for its "40 Recommendations."',
        category: 'International Standards'
      },
      {
        id: '1-7',
        question: 'The "legal principle" of ignoring facts that indicate a crime is being committed is known as:',
        options: ['Strict Liability', 'Willful Blindness', 'Vicarious Liability', 'Due Diligence'],
        correctAnswer: 1,
        explanation: 'Willful Blindness is the deliberate avoidance of knowledge of the facts.',
        category: 'AML Regulations'
      },
      {
        id: '1-8',
        question: 'Which section of the USA PATRIOT Act prohibits correspondent accounts for foreign shell banks?',
        options: ['Section 311', 'Section 312', 'Section 313', 'Section 314'],
        correctAnswer: 2,
        explanation: 'Section 313 prohibits US banks from maintaining accounts for shell banks.',
        category: 'AML Regulations'
      },
      {
        id: '1-9',
        question: 'What does SAR stand for in the context of AML?',
        options: ['Systemic Audit Report', 'Suspicious Activity Report', 'Standard Account Review', 'Securities Analysis Record'],
        correctAnswer: 1,
        explanation: 'SAR stands for Suspicious Activity Report.',
        category: 'AML Regulations'
      },
      {
        id: '1-10',
        question: 'Which section of the USA PATRIOT Act allows for information sharing between financial institutions?',
        options: ['Section 314(a)', 'Section 314(b)', 'Section 311', 'Section 312'],
        correctAnswer: 1,
        explanation: 'Section 314(b) allows voluntary information sharing between financial institutions.',
        category: 'AML Regulations'
      },
      {
        id: '1-11',
        question: 'The "Vienna Convention" primarily focused on:',
        options: ['Terrorist Financing', 'Drug Trafficking', 'Corruption', 'Human Trafficking'],
        correctAnswer: 1,
        explanation: 'The 1988 Vienna Convention focused on illicit traffic in narcotic drugs.',
        category: 'International Standards'
      },
      {
        id: '1-12',
        question: 'The "Palermo Convention" (2000) addressed:',
        options: ['Cybercrime', 'Tax Evasion', 'Transnational Organized Crime', 'Shell Companies'],
        correctAnswer: 2,
        explanation: 'The Palermo Convention is the UN Convention against Transnational Organized Crime.',
        category: 'International Standards'
      },
      {
        id: '1-13',
        question: 'What is the primary goal of an AML/CFT program?',
        options: ['Maximize Profit', 'Detect all crimes', 'Protect the organization and ensure compliance', 'Reduce taxes'],
        correctAnswer: 2,
        explanation: 'The primary goal is protection against financial crimes and ensuring regulatory compliance.',
        category: 'Compliance Programs'
      },
      {
        id: '1-14',
        question: 'Which of the following is NOT one of the traditional "Four Pillars" of an AML program?',
        options: ['Internal Controls', 'Compliance Officer', 'Employee Training', 'Marketing Strategy'],
        correctAnswer: 3,
        explanation: 'Marketing is not a pillar; the fourth pillar is Independent Audit.',
        category: 'Compliance Programs'
      },
      {
        id: '1-15',
        question: 'What is the "Fifth Pillar" added by FinCEN in 2016?',
        options: ['Cybersecurity', 'Customer Due Diligence', 'Sanctions Screening', 'Whistleblower Protection'],
        correctAnswer: 1,
        explanation: 'The Fifth Pillar is Customer Due Diligence (CDD).',
        category: 'Compliance Programs'
      },
      {
        id: '1-16',
        question: 'A "Shell Bank" is defined as a bank that:',
        options: ['Is located in a tax haven', 'Has no physical presence', 'Only serves one customer', 'Is owned by a government'],
        correctAnswer: 1,
        explanation: 'A shell bank has no physical presence in any country.',
        category: 'AML Regulations'
      },
      {
        id: '1-17',
        question: 'The FATF "Travel Rule" applies to:',
        options: ['Airline passengers', 'Wire transfers and virtual asset transfers', 'Cross-border trade', 'Diplomatic immunity'],
        correctAnswer: 1,
        explanation: 'The Travel Rule requires sharing originator and beneficiary info for transfers.',
        category: 'International Standards'
      },
      {
        id: '1-18',
        question: 'Which body is responsible for administering US economic and trade sanctions?',
        options: ['FinCEN', 'SEC', 'OFAC', 'FBI'],
        correctAnswer: 2,
        explanation: 'OFAC (Office of Foreign Assets Control) administers US sanctions.',
        category: 'AML Regulations'
      },
      {
        id: '1-19',
        question: 'What is the term for a person who carries out structuring for a money launderer?',
        options: ['Mule', 'Smurf', 'Runner', 'Broker'],
        correctAnswer: 1,
        explanation: 'Individuals engaged in structuring are often called "smurfs."',
        category: 'Financial Crimes'
      },
      {
        id: '1-20',
        question: 'The "Wolfsberg Group" is an association of:',
        options: ['Regulators', 'Law Enforcement', 'Global Banks', 'Insurance Companies'],
        correctAnswer: 2,
        explanation: 'The Wolfsberg Group is an association of global banks.',
        category: 'International Standards'
      },
      {
        id: '1-21',
        question: 'What is a "Predicate Offense" in the context of money laundering?',
        options: ['A minor crime', 'The underlying criminal activity that generated the illicit funds', 'A crime committed after laundering', 'A crime committed by a bank'],
        correctAnswer: 1,
        explanation: 'Predicate offenses are the crimes (like drug trafficking or fraud) that produce the money to be laundered.',
        category: 'AML Regulations'
      },
      {
        id: '1-22',
        question: 'FATF Recommendation 1 requires countries to apply which approach to AML/CFT?',
        options: ['Rule-based approach', 'Risk-based approach', 'Zero-tolerance approach', 'Global-standard approach'],
        correctAnswer: 1,
        explanation: 'The Risk-Based Approach (RBA) is the cornerstone of the FATF Recommendations.',
        category: 'International Standards'
      },
      {
        id: '1-23',
        question: 'Which EU Directive first required member states to maintain central registers of beneficial ownership?',
        options: ['Third Directive', 'Fourth Directive', 'Fifth Directive', 'Sixth Directive'],
        correctAnswer: 1,
        explanation: 'The 4th AML Directive introduced the requirement for central UBO registers.',
        category: 'AML Regulations'
      },
      {
        id: '1-24',
        question: 'What is the primary role of FinCEN in the United States?',
        options: ['To arrest money launderers', 'To act as the US Financial Intelligence Unit (FIU)', 'To set interest rates', 'To manage the stock market'],
        correctAnswer: 1,
        explanation: 'FinCEN is the US FIU, responsible for collecting and analyzing financial intelligence.',
        category: 'AML Regulations'
      },
      {
        id: '1-25',
        question: 'The practice of using multiple individuals to perform small cash deposits is specifically called:',
        options: ['Structuring', 'Smurfing', 'Layering', 'Integration'],
        correctAnswer: 1,
        explanation: 'Smurfing is a form of structuring that uses multiple people (smurfs) to avoid detection.',
        category: 'Financial Crimes'
      }
    ]
  },
  {
    id: 'set2',
    title: 'Banking & Financial Institutions',
    questions: [
      {
        id: '2-1',
        question: 'In correspondent banking, the "respondent" is:',
        options: ['The bank providing services', 'The bank receiving services', 'The regulator', 'The customer'],
        correctAnswer: 1,
        explanation: 'The respondent bank is the local bank that contracts with a foreign correspondent bank.',
        category: 'Compliance Programs'
      },
      {
        id: '2-2',
        question: 'What is "Nesting" in correspondent banking?',
        options: ['Opening multiple accounts', 'Providing services to third-party banks through a correspondent account', 'Hiding funds in a trust', 'Investing in real estate'],
        correctAnswer: 1,
        explanation: 'Nesting is when a respondent bank provides services to other banks through its account.',
        category: 'Compliance Programs'
      },
      {
        id: '2-3',
        question: 'Payable-Through Accounts (PTAs) are high risk because:',
        options: ['They have high fees', 'The foreign bank\'s customers have direct control over funds at the correspondent bank', 'They are only for PEPs', 'They are illegal in the US'],
        correctAnswer: 1,
        explanation: 'PTAs allow the respondent\'s customers to directly control funds, bypassing the correspondent\'s oversight.',
        category: 'Compliance Programs'
      },
      {
        id: '2-4',
        question: 'Which element of CDD involves identifying the "natural person" who ultimately owns or controls a customer?',
        options: ['KYC', 'KYE', 'Beneficial Ownership', 'Risk Rating'],
        correctAnswer: 2,
        explanation: 'Beneficial ownership identification is about finding the natural person in control.',
        category: 'Compliance Programs'
      },
      {
        id: '2-5',
        question: 'Enhanced Due Diligence (EDD) is mandatory for:',
        options: ['All new customers', 'Publicly traded companies', 'Foreign PEPs', 'Local charities'],
        correctAnswer: 2,
        explanation: 'FATF standards require EDD for foreign PEPs.',
        category: 'Compliance Programs'
      },
      {
        id: '2-6',
        question: 'What is the "First Line of Defense" in an AML program?',
        options: ['Compliance Department', 'Internal Audit', 'Business Lines / Front Office', 'Regulators'],
        correctAnswer: 2,
        explanation: 'The business lines (customer-facing staff) are the first line of defense.',
        category: 'Compliance Programs'
      },
      {
        id: '2-7',
        question: 'The "Second Line of Defense" is:',
        options: ['The Board of Directors', 'The Compliance Function', 'External Audit', 'Law Enforcement'],
        correctAnswer: 1,
        explanation: 'The compliance and internal control functions are the second line of defense.',
        category: 'Compliance Programs'
      },
      {
        id: '2-8',
        question: 'The "Third Line of Defense" is:',
        options: ['The CEO', 'The Compliance Officer', 'Internal Audit', 'The Customer'],
        correctAnswer: 2,
        explanation: 'Internal Audit is the third line of defense, providing independent testing.',
        category: 'Compliance Programs'
      },
      {
        id: '2-9',
        question: 'What is a "Concentration Account"?',
        options: ['An account for high-risk customers', 'An internal bank account used to aggregate funds', 'An account in a tax haven', 'A savings account'],
        correctAnswer: 1,
        explanation: 'Concentration accounts are internal accounts used to facilitate processing and settlement.',
        category: 'Compliance Programs'
      },
      {
        id: '2-10',
        question: 'Private Banking is considered high risk primarily due to:',
        options: ['Low fees', 'High level of confidentiality and wealthy clientele', 'Strict regulations', 'Public transparency'],
        correctAnswer: 1,
        explanation: 'Confidentiality and the nature of the clientele make private banking vulnerable.',
        category: 'Compliance Programs'
      },
      {
        id: '2-11',
        question: 'What is a "PIC" in the context of private banking?',
        options: ['Personal Identification Code', 'Private Investment Company', 'Public Interest Corporation', 'Payment in Cash'],
        correctAnswer: 1,
        explanation: 'PIC stands for Private Investment Company, often used as a shell vehicle.',
        category: 'Compliance Programs'
      },
      {
        id: '2-12',
        question: 'Which body published the "Core Principles for Effective Banking Supervision"?',
        options: ['FATF', 'Wolfsberg Group', 'Basel Committee', 'Egmont Group'],
        correctAnswer: 2,
        explanation: 'The Basel Committee on Banking Supervision published the Core Principles.',
        category: 'International Standards'
      },
      {
        id: '2-13',
        question: 'What is the threshold for "Occasional Transactions" requiring CDD according to FATF?',
        options: ['$1,000', '$5,000', '$15,000', '$10,000'],
        correctAnswer: 2,
        explanation: 'FATF sets the threshold for occasional transactions at USD/EUR 15,000.',
        category: 'International Standards'
      },
      {
        id: '2-14',
        question: 'A "Red Flag" for MSBs (Money Services Businesses) is:',
        options: ['Filing CTRs', 'Frequent cash deposits just below thresholds', 'Having a compliance officer', 'Using pre-printed deposit slips'],
        correctAnswer: 1,
        explanation: 'Structuring deposits just below thresholds is a major red flag.',
        category: 'Compliance Programs'
      },
      {
        id: '2-15',
        question: 'Which insurance product is most attractive to money launderers?',
        options: ['Term Life Insurance', 'Property Insurance', 'Whole Life Insurance / Annuities', 'Health Insurance'],
        correctAnswer: 2,
        explanation: 'Products with cash value or investment features are most attractive.',
        category: 'Compliance Programs'
      },
      {
        id: '2-16',
        question: 'In the securities industry, "Wash Trading" refers to:',
        options: ['Cleaning money through stock buys', 'Matching buys and sells to create the illusion of trading', 'Selling all assets at once', 'Trading in penny stocks'],
        correctAnswer: 1,
        explanation: 'Wash trading involves offsetting transactions to create fake volume or profits.',
        category: 'Financial Crimes'
      },
      {
        id: '2-17',
        question: 'What is "Remote Deposit Capture" (RDC)?',
        options: ['Withdrawing money from an ATM', 'Scanning a check and transmitting the image for deposit', 'Wiring money to a remote location', 'Opening an account online'],
        correctAnswer: 1,
        explanation: 'RDC allows customers to deposit checks electronically without visiting a branch.',
        category: 'Compliance Programs'
      },
      {
        id: '2-18',
        question: 'Which section of the USA PATRIOT Act requires EDD for foreign correspondent accounts?',
        options: ['Section 311', 'Section 312', 'Section 313', 'Section 319'],
        correctAnswer: 1,
        explanation: 'Section 312 requires due diligence and EDD for foreign correspondent accounts.',
        category: 'AML Regulations'
      },
      {
        id: '2-19',
        question: 'The "Basel Committee" is headquartered in:',
        options: ['Paris', 'London', 'Basel, Switzerland', 'New York'],
        correctAnswer: 2,
        explanation: 'The Basel Committee is located at the Bank for International Settlements in Basel.',
        category: 'International Standards'
      },
      {
        id: '2-20',
        question: 'What is the "Travel Rule" threshold for wire transfers in the US?',
        options: ['$1,000', '$3,000', '$10,000', '$500'],
        correctAnswer: 1,
        explanation: 'In the US, the Travel Rule applies to transfers of $3,000 or more.',
        category: 'AML Regulations'
      },
      {
        id: '2-21',
        question: 'In correspondent banking, "KYCC" stands for:',
        options: ['Know Your Customer\'s Country', 'Know Your Customer\'s Customer', 'Keep Your Compliance Current', 'Know Your Corporate Client'],
        correctAnswer: 1,
        explanation: 'KYCC refers to the need for correspondent banks to understand the respondent\'s customer base.',
        category: 'Compliance Programs'
      },
      {
        id: '2-22',
        question: 'Which of the following is a major risk associated with Payable-Through Accounts (PTAs)?',
        options: ['High transaction costs', 'The respondent bank\'s customers can conduct transactions as if they were the correspondent bank\'s own customers', 'They are only available in local currency', 'They require manual processing'],
        correctAnswer: 1,
        explanation: 'PTAs allow sub-account holders to directly access the correspondent bank\'s services, often with minimal oversight.',
        category: 'Compliance Programs'
      },
      {
        id: '2-23',
        question: 'In private banking, "Source of Wealth" (SoW) refers to:',
        options: ['The origin of the specific funds used for a transaction', 'The activities that generated the customer\'s entire net worth', 'The customer\'s bank account balance', 'The customer\'s credit score'],
        correctAnswer: 1,
        explanation: 'SoW is the origin of the customer\'s total assets, while Source of Funds is about the specific transaction.',
        category: 'Compliance Programs'
      },
      {
        id: '2-24',
        question: 'Concentration accounts are risky because they can:',
        options: ['Lose money in the stock market', 'Commingle customer funds with bank funds, hiding the audit trail', 'Be accessed by any employee', 'Only be used for cash'],
        correctAnswer: 1,
        explanation: 'Commingling funds in internal accounts can hide individual transaction details from investigators.',
        category: 'Compliance Programs'
      },
      {
        id: '2-25',
        question: 'The Wolfsberg "CBDDQ" is used for due diligence on:',
        options: ['Private banking clients', 'Correspondent banking relationships', 'Politically Exposed Persons', 'Charities'],
        correctAnswer: 1,
        explanation: 'CBDDQ stands for Correspondent Banking Due Diligence Questionnaire.',
        category: 'Compliance Programs'
      }
    ]
  },
  {
    id: 'set3',
    title: 'Non-Financial Sectors & Trade',
    questions: [
      {
        id: '3-1',
        question: 'Which of the following is a "DNPBP" (Designated Non-Financial Business and Profession)?',
        options: ['Commercial Bank', 'Real Estate Agent', 'Insurance Company', 'Mutual Fund'],
        correctAnswer: 1,
        explanation: 'Real estate agents are classified as DNFBPs.',
        category: 'International Standards'
      },
      {
        id: '3-2',
        question: 'Casinos are high risk because:',
        options: ['They are PROFICIENT cash-generating businesses', 'They have low profits', 'They are only for tourists', 'They are illegal globally'],
        correctAnswer: 0,
        explanation: 'Casinos handle high volumes of cash, making them attractive for placement.',
        category: 'Compliance Programs'
      },
      {
        id: '3-3',
        question: 'What is "Bill Stuffing" in a casino context?',
        options: ['Putting cash in an envelope', 'Inserting high numbers of small bills into a slot machine with minimal play', 'Winning a large jackpot', 'Using fake chips'],
        correctAnswer: 1,
        explanation: 'Bill stuffing is a technique to exchange small bills for a casino check or larger bills.',
        category: 'Financial Crimes'
      },
      {
        id: '3-4',
        question: 'Dealers in Precious Metals and Stones (DPMS) are high risk because gold:',
        options: ['Is heavy', 'Has high intrinsic value in a compact form', 'Is only found in high-risk countries', 'Is used for jewelry'],
        correctAnswer: 1,
        explanation: 'Gold\'s high value and portability make it an excellent laundering vehicle.',
        category: 'Compliance Programs'
      },
      {
        id: '3-5',
        question: 'In the real estate sector, "Straw Buyers" are also known as:',
        options: ['Smurfs', 'Cleanskins', 'Runners', 'Mules'],
        correctAnswer: 1,
        explanation: 'Third-party buyers used to hide the true owner are sometimes called "cleanskins."',
        category: 'Financial Crimes'
      },
      {
        id: '3-6',
        question: 'Which of the following is a "Gatekeeper"?',
        options: ['A bank teller', 'A lawyer or accountant', 'A police officer', 'A customer'],
        correctAnswer: 1,
        explanation: 'Lawyers and accountants are "gatekeepers" who can block or facilitate illicit entry.',
        category: 'Compliance Programs'
      },
      {
        id: '3-7',
        question: 'What is "Trade-Based Money Laundering" (TBML)?',
        options: ['Trading stocks', 'Disguising proceeds of crime through trade transactions', 'Buying goods with a credit card', 'Selling goods at a profit'],
        correctAnswer: 1,
        explanation: 'TBML involves misrepresenting price, quantity, or quality of goods to move value.',
        category: 'Financial Crimes'
      },
      {
        id: '3-8',
        question: '"Overinvoicing" in TBML involves:',
        options: ['Shipping more goods than invoiced', 'Invoicing goods at a price ABOVE fair market value', 'Invoicing goods at a price BELOW fair market value', 'Not issuing an invoice'],
        correctAnswer: 1,
        explanation: 'Overinvoicing allows the seller to receive more value from the buyer.',
        category: 'Financial Crimes'
      },
      {
        id: '3-9',
        question: 'The "Black Market Peso Exchange" (BMPE) is a form of:',
        options: ['Currency Smuggling', 'Trade-Based Money Laundering', 'Structuring', 'Integration'],
        correctAnswer: 1,
        explanation: 'BMPE is a sophisticated form of trade-based money laundering.',
        category: 'Financial Crimes'
      },
      {
        id: '3-10',
        question: '"Free Trade Zones" (FTZs) are vulnerable because:',
        options: ['They have too many rules', 'They often have relaxed oversight and weak AML safeguards', 'They are only in the US', 'They don\'t allow banks'],
        correctAnswer: 1,
        explanation: 'Relaxed oversight in FTZs makes them an opportune setting for TBML.',
        category: 'Financial Crimes'
      },
      {
        id: '3-11',
        question: 'What is a "Funnel Account"?',
        options: ['An account for a charity', 'An account where deposits in one area are quickly withdrawn in another', 'A high-interest savings account', 'An account for a PEP'],
        correctAnswer: 1,
        explanation: 'Funnel accounts exploit branch networks to move cash across geographic regions.',
        category: 'Financial Crimes'
      },
      {
        id: '3-12',
        question: 'Which of the following is a red flag for "Human Smuggling"?',
        options: ['High fees', 'Multiple wire transfers to a common beneficiary on the border', 'Using a credit card', 'Having a valid ID'],
        correctAnswer: 1,
        explanation: 'Frequent wires to border cities are a major red flag for human smuggling.',
        category: 'Financial Crimes'
      },
      {
        id: '3-13',
        question: '"Virtual Currency" exchanges are regulated as:',
        options: ['Banks', 'Money Services Businesses (MSBs)', 'Insurance Companies', 'Stock Brokers'],
        correctAnswer: 1,
        explanation: 'VC exchangers are generally classified as MSBs/Money Transmitters.',
        category: 'AML Regulations'
      },
      {
        id: '3-14',
        question: 'The "Travel Rule" for virtual assets requires:',
        options: ['A passport for trading', 'Sharing originator and beneficiary info between VASPs', 'Only trading in your home country', 'Paying a travel tax'],
        correctAnswer: 1,
        explanation: 'The Travel Rule requires VASPs to share transaction data.',
        category: 'International Standards'
      },
      {
        id: '3-15',
        question: 'What is a "Shelf Company"?',
        options: ['A company that sells shelves', 'A corporation with no activity that is "put on the shelf" for later sale', 'A company in bankruptcy', 'A public company'],
        correctAnswer: 1,
        explanation: 'Shelf companies are pre-registered entities sold to those who want an aged company.',
        category: 'Financial Crimes'
      },
      {
        id: '3-16',
        question: '"Bearer Shares" are high risk because:',
        options: ['They are printed on paper', 'Ownership is determined by physical possession', 'They have no value', 'They are only for banks'],
        correctAnswer: 1,
        explanation: 'Bearer shares allow for anonymous transfer of ownership.',
        category: 'Financial Crimes'
      },
      {
        id: '3-17',
        question: 'A "Trust" involves which three parties?',
        options: ['Banker, Customer, Regulator', 'Settlor, Trustee, Beneficiary', 'Buyer, Seller, Agent', 'CEO, Manager, Employee'],
        correctAnswer: 1,
        explanation: 'A trust is an arrangement between a settlor, a trustee, and a beneficiary.',
        category: 'Compliance Programs'
      },
      {
        id: '3-18',
        question: 'Which DNFBP is often used to "layer" funds through property flipping?',
        options: ['Casinos', 'Real Estate', 'Lawyers', 'Art Dealers'],
        correctAnswer: 1,
        explanation: 'Real estate is frequently used for layering through successive sales.',
        category: 'Financial Crimes'
      },
      {
        id: '3-19',
        question: 'What is "Wildlife Trafficking"?',
        options: ['Illegal trade in protected species', 'Hunting in season', 'Owning a zoo', 'Selling pet food'],
        correctAnswer: 0,
        explanation: 'Wildlife trafficking is the illegal trade and collection of endangered species.',
        category: 'Financial Crimes'
      },
      {
        id: '3-20',
        question: 'Which body published the "Social Media & Terrorist Financing Report"?',
        options: ['FATF', 'APG & MENAFATF', 'Egmont Group', 'Wolfsberg Group'],
        correctAnswer: 1,
        explanation: 'The APG and MENAFATF jointly published this report.',
        category: 'International Standards'
      },
      {
        id: '3-21',
        question: 'In real estate, "Property Flipping" can be used for laundering by:',
        options: ['Painting the house', 'Successive sales at inflated prices to move and legitimize funds', 'Renting to students', 'Selling at a loss'],
        correctAnswer: 1,
        explanation: 'Flipping involves rapid buying and selling to create the appearance of legitimate profit.',
        category: 'Financial Crimes'
      },
      {
        id: '3-22',
        question: 'The art market is attractive to launderers primarily due to:',
        options: ['The beauty of the items', 'Subjective pricing and high levels of anonymity', 'Low prices', 'Strict government oversight'],
        correctAnswer: 1,
        explanation: 'The difficulty in valuing art and the tradition of private sales make it vulnerable.',
        category: 'Financial Crimes'
      },
      {
        id: '3-23',
        question: 'What does "TCSP" stand for in the context of DNFBPs?',
        options: ['Total Compliance Support Program', 'Trust and Company Service Providers', 'Technical Cooperation for Security and Peace', 'Trade and Commerce Services Platform'],
        correctAnswer: 1,
        explanation: 'TCSPs provide services like company formation and acting as trustees.',
        category: 'International Standards'
      },
      {
        id: '3-24',
        question: 'Gatekeepers like lawyers may claim "legal professional privilege" to avoid:',
        options: ['Paying taxes', 'Reporting suspicious activity', 'Going to court', 'Hiring a compliance officer'],
        correctAnswer: 1,
        explanation: 'Privilege can sometimes be used to shield client information from AML reporting requirements.',
        category: 'Compliance Programs'
      },
      {
        id: '3-25',
        question: 'Free Trade Zones (FTZs) are often exploited for TBML because of:',
        options: ['High taxes', 'Inadequate integration of customs and AML oversight', 'Too many security guards', 'Their location in mountains'],
        correctAnswer: 1,
        explanation: 'The focus on trade facilitation in FTZs often comes at the expense of rigorous AML controls.',
        category: 'Financial Crimes'
      }
    ]
  },
  {
    id: 'set4',
    title: 'Terrorist Financing & Compliance Programs',
    questions: [
      {
        id: '4-1',
        question: 'What is the primary difference between Money Laundering and Terrorist Financing?',
        options: ['The amount of money', 'The source of funds (TF can use legitimate funds)', 'The location', 'The currency used'],
        correctAnswer: 1,
        explanation: 'TF can involve funds from perfectly legitimate sources, unlike ML which always uses illicit proceeds.',
        category: 'Financial Crimes'
      },
      {
        id: '4-2',
        question: 'The "Hawala" system is based on:',
        options: ['Collateral', 'Trust', 'Blockchain', 'Gold'],
        correctAnswer: 1,
        explanation: 'Hawala is an informal value transfer system based on trust and a network of brokers.',
        category: 'Financial Crimes'
      },
      {
        id: '4-3',
        question: 'Which FATF Recommendation specifically addresses Non-Profit Organizations (NPOs)?',
        options: ['Recommendation 1', 'Recommendation 8', 'Recommendation 10', 'Recommendation 15'],
        correctAnswer: 1,
        explanation: 'Recommendation 8 focuses on preventing the abuse of NPOs for terrorist financing.',
        category: 'International Standards'
      },
      {
        id: '4-4',
        question: 'What is a "Red Flag" for Terrorist Financing in an NPO?',
        options: ['Filing tax returns', 'Funds diverted to support terrorism at some stage', 'Having a board of directors', 'Receiving small donations'],
        correctAnswer: 1,
        explanation: 'Diversion of funds from charitable purposes to terrorism is a major risk.',
        category: 'Financial Crimes'
      },
      {
        id: '4-5',
        question: '"Self-funding" by Foreign Terrorist Fighters (FTFs) includes:',
        options: ['Only drug sales', 'Employment income, social assistance, and family support', 'Bank loans only', 'Government grants'],
        correctAnswer: 1,
        explanation: 'FTFs often use their own legitimate income or support from family to fund their activities.',
        category: 'Financial Crimes'
      },
      {
        id: '4-6',
        question: 'Which body serves as a "clearinghouse" for money laundering information for national AML agencies?',
        options: ['FATF', 'IMoLIN', 'Wolfsberg Group', 'Basel Committee'],
        correctAnswer: 1,
        explanation: 'IMoLIN (International Money Laundering Information Network) serves as a clearinghouse.',
        category: 'International Standards'
      },
      {
        id: '4-7',
        question: 'What is an "MLAT"?',
        options: ['Money Laundering Audit Tool', 'Mutual Legal Assistance Treaty', 'Multi-Level Account Tracking', 'Monetary Loss Assessment Team'],
        correctAnswer: 1,
        explanation: 'MLAT stands for Mutual Legal Assistance Treaty, used for international evidence sharing.',
        category: 'International Standards'
      },
      {
        id: '4-8',
        question: 'What is the primary function of an FIU (Financial Intelligence Unit)?',
        options: ['Arrest criminals', 'Receive, analyze, and disseminate suspicious transaction reports', 'Set interest rates', 'Audit banks'],
        correctAnswer: 1,
        explanation: 'FIUs are national centers for the receipt and analysis of suspicious activity reports.',
        category: 'International Standards'
      },
      {
        id: '4-9',
        question: 'The "Egmont Group" is an association of:',
        options: ['Global Banks', 'Financial Intelligence Units (FIUs)', 'Customs Officers', 'Tax Advisors'],
        correctAnswer: 1,
        explanation: 'The Egmont Group is the global association of FIUs.',
        category: 'International Standards'
      },
      {
        id: '4-10',
        question: 'What is "Tipping Off"?',
        options: ['Giving a gratuity', 'Notifying a suspect that a suspicious transaction report has been filed', 'Reporting a crime', 'Closing an account'],
        correctAnswer: 1,
        explanation: 'Tipping off is the illegal act of informing a customer they are under investigation.',
        category: 'AML Regulations'
      },
      {
        id: '4-11',
        question: '"Safe Harbor" refers to:',
        options: ['A port for ships', 'Legal protection for reporting suspicious activity in good faith', 'A tax haven', 'A secure bank vault'],
        correctAnswer: 1,
        explanation: 'Safe harbor laws protect institutions and employees from liability when filing SARs.',
        category: 'AML Regulations'
      },
      {
        id: '4-12',
        question: 'In the US, how long must AML records generally be maintained?',
        options: ['1 year', '3 years', '5 years', '10 years'],
        correctAnswer: 2,
        explanation: 'Under the BSA, records must generally be kept for 5 years.',
        category: 'AML Regulations'
      },
      {
        id: '4-13',
        question: 'What is a "Subpoena"?',
        options: ['A search warrant', 'A legal process to compel production of documents or testimony', 'A fine', 'A bank statement'],
        correctAnswer: 1,
        explanation: 'A subpoena is a court-issued demand for documents or testimony.',
        category: 'AML Regulations'
      },
      {
        id: '4-14',
        question: 'A "Search Warrant" is granted by:',
        options: ['The Police', 'A Court', 'The Bank Manager', 'The Compliance Officer'],
        correctAnswer: 1,
        explanation: 'A search warrant is a grant of permission from a court.',
        category: 'AML Regulations'
      },
      {
        id: '4-15',
        question: 'Which body issued the "Yates Memo" on individual accountability?',
        options: ['FinCEN', 'US Department of Justice', 'SEC', 'FATF'],
        correctAnswer: 1,
        explanation: 'The Yates Memo was issued by the US Department of Justice.',
        category: 'AML Regulations'
      },
      {
        id: '4-16',
        question: 'The "Senior Managers and Certification Regime" (SM&CR) is a UK initiative for:',
        options: ['Customer service', 'Individual accountability in the banking sector', 'Tax reform', 'Cybersecurity'],
        correctAnswer: 1,
        explanation: 'SM&CR is designed to improve individual accountability in UK banking.',
        category: 'AML Regulations'
      },
      {
        id: '4-17',
        question: 'What is "KYE"?',
        options: ['Know Your Entity', 'Know Your Employee', 'Keep Your Evidence', 'Key Yield Exchange'],
        correctAnswer: 1,
        explanation: 'KYE stands for Know Your Employee, focusing on internal threats.',
        category: 'Compliance Programs'
      },
      {
        id: '4-18',
        question: 'Which body published "FIUs in Action: 100 Cases"?',
        options: ['FATF', 'Egmont Group', 'Interpol', 'Europol'],
        correctAnswer: 1,
        explanation: 'The Egmont Group published this collection of case studies.',
        category: 'International Standards'
      },
      {
        id: '4-19',
        question: 'What is the "Crime-Terror Nexus"?',
        options: ['A new movie', 'The link between organized crime and terrorist financing', 'A secure network', 'A type of fraud'],
        correctAnswer: 1,
        explanation: 'The crime-terror nexus denotes how organized crime enables terrorism.',
        category: 'Financial Crimes'
      },
      {
        id: '4-20',
        question: '"Proliferation Financing" refers to funds for:',
        options: ['Drug sales', 'Weapons of Mass Destruction (WMD)', 'Human trafficking', 'Corruption'],
        correctAnswer: 1,
        explanation: 'Proliferation financing is the provision of funds for WMD.',
        category: 'Financial Crimes'
      },
      {
        id: '4-21',
        question: 'Non-Profit Organizations (NPOs) can be abused for TF by:',
        options: ['Paying their employees', 'Diverting legitimate donations to terrorist groups', 'Filing accurate reports', 'Helping the poor'],
        correctAnswer: 1,
        explanation: 'The primary risk is the diversion of charitable funds to illicit purposes.',
        category: 'Financial Crimes'
      },
      {
        id: '4-22',
        question: 'In the Hawala system, a "Chit" is:',
        options: ['A type of bread', 'A token or code used to claim funds at the destination', 'A bank statement', 'A legal contract'],
        correctAnswer: 1,
        explanation: 'Chits are informal receipts or codes used to verify the right to receive money.',
        category: 'Financial Crimes'
      },
      {
        id: '4-23',
        question: 'What are "Targeted Financial Sanctions" (TFS)?',
        options: ['Taxes on banks', 'Freezing assets of specific individuals or entities linked to terrorism', 'Fines for late reporting', 'Tariffs on imports'],
        correctAnswer: 1,
        explanation: 'TFS are directed at specific targets rather than entire countries.',
        category: 'AML Regulations'
      },
      {
        id: '4-24',
        question: 'The "Tone at the Top" refers to the commitment of:',
        options: ['The janitor', 'Senior management and the Board of Directors', 'The regulators', 'The customers'],
        correctAnswer: 1,
        explanation: 'A strong compliance culture must start with leadership.',
        category: 'Compliance Programs'
      },
      {
        id: '4-25',
        question: 'Independent testing of an AML program should be conducted:',
        options: ['Every day', 'On a regular basis, typically annually or as risk dictates', 'Only when the regulator asks', 'Never'],
        correctAnswer: 1,
        explanation: 'Regular independent testing ensures the program remains effective over time.',
        category: 'Compliance Programs'
      }
    ]
  },
  {
    id: 'set5',
    title: 'International Standards & Cooperation',
    questions: [
      {
        id: '5-1',
        question: 'The "FATF Greylist" refers to jurisdictions:',
        options: ['With no AML laws', 'Under increased monitoring', 'Subject to a call for action', 'That are FATF members'],
        correctAnswer: 1,
        explanation: 'The greylist is for jurisdictions actively working with FATF to address deficiencies.',
        category: 'International Standards'
      },
      {
        id: '5-2',
        question: 'The "FATF Blacklist" refers to jurisdictions:',
        options: ['With high taxes', 'Subject to a call for action due to strategic deficiencies', 'That are in Europe', 'With no banks'],
        correctAnswer: 1,
        explanation: 'The blacklist is for high-risk jurisdictions subject to a call for action.',
        category: 'International Standards'
      },
      {
        id: '5-3',
        question: 'Which EU Directive harmonized predicate offenses across all member states?',
        options: ['Third Directive', 'Fourth Directive', 'Fifth Directive', 'Sixth Directive'],
        correctAnswer: 3,
        explanation: 'The Sixth Directive focused on harmonizing 22 predicate offenses.',
        category: 'AML Regulations'
      },
      {
        id: '5-4',
        question: 'The EU "Fifth Directive" (2018) introduced registers for:',
        options: ['All bank accounts', 'Beneficial ownership', 'Foreign tourists', 'Stock trades'],
        correctAnswer: 1,
        explanation: 'The Fifth Directive required publicly accessible registers of beneficial ownership.',
        category: 'AML Regulations'
      },
      {
        id: '5-5',
        question: 'Which body is the "operational arm" of the international AML/CFT apparatus?',
        options: ['FATF', 'Egmont Group', 'IMF', 'World Bank'],
        correctAnswer: 1,
        explanation: 'The Egmont Group of FIUs is often described as the operational arm.',
        category: 'International Standards'
      },
      {
        id: '5-6',
        question: 'The "Wolfsberg Anti-Money Laundering Principles for Private Banking" were first published in:',
        options: ['1990', '2000', '2010', '2020'],
        correctAnswer: 1,
        explanation: 'The Wolfsberg Principles were first published in October 2000.',
        category: 'International Standards'
      },
      {
        id: '5-7',
        question: 'What is the "G-10"?',
        options: ['A group of 10 banks', 'A group of 11 industrialized nations', 'A FATF subcommittee', 'A type of security'],
        correctAnswer: 1,
        explanation: 'The G-10 is a group of industrialized nations (actually 11) that established the Basel Committee.',
        category: 'International Standards'
      },
      {
        id: '5-8',
        question: 'Which body is based at the OECD in Paris?',
        options: ['Basel Committee', 'FATF', 'Egmont Group', 'Wolfsberg Group'],
        correctAnswer: 1,
        explanation: 'The FATF Secretariat is housed at the OECD in Paris.',
        category: 'International Standards'
      },
      {
        id: '5-9',
        question: 'What is "Mutual Evaluation" in the FATF context?',
        options: ['A job interview', 'A peer review process to assess a country\'s compliance', 'A bank audit', 'A customer review'],
        correctAnswer: 1,
        explanation: 'Mutual evaluations are peer reviews where FATF members assess each other.',
        category: 'International Standards'
      },
      {
        id: '5-10',
        question: 'The "Asia/Pacific Group on Money Laundering" (APG) is an example of a:',
        options: ['Central Bank', 'FSRB (FATF-Style Regional Body)', 'Law Enforcement Agency', 'Trade Association'],
        correctAnswer: 1,
        explanation: 'The APG is one of the nine FSRBs.',
        category: 'International Standards'
      },
      {
        id: '5-11',
        question: 'Which FSRB covers the Caribbean region?',
        options: ['GAFILAT', 'CFATF', 'MONEYVAL', 'GIABA'],
        correctAnswer: 1,
        explanation: 'CFATF is the Caribbean Financial Action Task Force.',
        category: 'International Standards'
      },
      {
        id: '5-12',
        question: 'Which FSRB covers Council of Europe member states not in FATF?',
        options: ['EAG', 'MONEYVAL', 'MENAFATF', 'ESAAMLG'],
        correctAnswer: 1,
        explanation: 'MONEYVAL is the committee for Council of Europe member states.',
        category: 'International Standards'
      },
      {
        id: '5-13',
        question: 'The "Egmont Secure Web" (ESW) is used for:',
        options: ['Online banking', 'Secure information exchange between FIUs', 'Public news', 'Shopping'],
        correctAnswer: 1,
        explanation: 'ESW is the secure platform for FIUs to share intelligence.',
        category: 'International Standards'
      },
      {
        id: '5-14',
        question: 'What is "Extraterritorial Reach"?',
        options: ['Space exploration', 'The extension of a country\'s laws to citizens and institutions of another', 'International trade', 'Diplomatic travel'],
        correctAnswer: 1,
        explanation: 'Extraterritorial reach allows laws (like US sanctions) to affect foreign entities.',
        category: 'AML Regulations'
      },
      {
        id: '5-15',
        question: 'Which body published the "Sound Management of Risks Related to Money Laundering"?',
        options: ['FATF', 'Basel Committee', 'Wolfsberg Group', 'Egmont Group'],
        correctAnswer: 1,
        explanation: 'The Basel Committee published this guidance for banks.',
        category: 'International Standards'
      },
      {
        id: '5-16',
        question: 'The "Kingston Ministerial Declaration" is associated with which FSRB?',
        options: ['APG', 'CFATF', 'GAFILAT', 'GIABA'],
        correctAnswer: 1,
        explanation: 'The Kingston Declaration (1992) endorsed the creation of CFATF.',
        category: 'International Standards'
      },
      {
        id: '5-17',
        question: 'Which FSRB covers West Africa?',
        options: ['GIABA', 'GABAC', 'ESAAMLG', 'MENAFATF'],
        correctAnswer: 0,
        explanation: 'GIABA is the Inter-Governmental Action Group against Money Laundering in West Africa.',
        category: 'International Standards'
      },
      {
        id: '5-18',
        question: 'The "Eurasian Group" (EAG) includes which major country?',
        options: ['USA', 'China', 'Brazil', 'Australia'],
        correctAnswer: 1,
        explanation: 'China and Russia are members of the EAG.',
        category: 'International Standards'
      },
      {
        id: '5-19',
        question: 'What is the "AMLA" in the context of the EU Seventh Directive?',
        options: ['Anti-Money Laundering Act', 'EU Central AML Authority', 'Account Management Legal Agency', 'Audit Monitoring Law Association'],
        correctAnswer: 1,
        explanation: 'AMLA is the proposed EU Central AML Authority.',
        category: 'AML Regulations'
      },
      {
        id: '5-20',
        question: 'Which body houses the "International Due Diligence Repository"?',
        options: ['FATF', 'Wolfsberg Group (with Banker\'s Almanac)', 'Egmont Group', 'IMF'],
        correctAnswer: 1,
        explanation: 'The Wolfsberg Group collaborated with the Banker\'s Almanac to develop this repository.',
        category: 'International Standards'
      },
      {
        id: '5-21',
        question: 'In FATF Mutual Evaluations, "Technical Compliance" assesses:',
        options: ['How well the country arrests criminals', 'Whether the country has the necessary laws and regulations in place', 'The speed of the internet', 'The number of banks'],
        correctAnswer: 1,
        explanation: 'Technical compliance is about the legal and institutional framework.',
        category: 'International Standards'
      },
      {
        id: '5-22',
        question: 'The Egmont Group "Principles for Information Exchange" focus on:',
        options: ['Sharing bank secrets with the public', 'Standardizing intelligence sharing between FIUs', 'Marketing strategies', 'Employee benefits'],
        correctAnswer: 1,
        explanation: 'The principles ensure that FIUs can cooperate effectively and securely.',
        category: 'International Standards'
      },
      {
        id: '5-23',
        question: 'The Basel Committee\'s "CDD for Banks" paper emphasizes:',
        options: ['Maximizing interest rates', 'The importance of "Know Your Customer" (KYC) for risk management', 'Reducing employee count', 'Expanding to new countries'],
        correctAnswer: 1,
        explanation: 'KYC is seen as essential for the safety and soundness of banks.',
        category: 'International Standards'
      },
      {
        id: '5-24',
        question: 'FATF Recommendation 16 (Wire Transfers) requires that:',
        options: ['All transfers be free', 'Transfers be accompanied by accurate originator and beneficiary info', 'Transfers take at least 3 days', 'Only cash be used'],
        correctAnswer: 1,
        explanation: 'This is the basis for the "Travel Rule" in traditional finance.',
        category: 'International Standards'
      },
      {
        id: '5-25',
        question: 'Which FSRB covers the Latin American region?',
        options: ['GAFILAT', 'GIABA', 'EAG', 'MONEYVAL'],
        correctAnswer: 0,
        explanation: 'GAFILAT is the Financial Action Task Force of Latin America.',
        category: 'International Standards'
      }
    ]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'The Shell Company Real Estate Scheme',
    scenario: 'A high-net-worth individual from a high-risk jurisdiction uses a complex network of shell companies across three different offshore financial centers to purchase a $25 million luxury penthouse in London. The funds are moved through multiple intermediary accounts before the final purchase.',
    risks: [
      'Concealment of beneficial ownership through opaque corporate structures.',
      'Layering of funds to obscure the illicit origin of wealth.',
      'Potential use of real estate as a vehicle for large-scale value transfer and integration.'
    ],
    recommendedActions: [
      'Perform Enhanced Due Diligence (EDD) on the ultimate beneficial owner (UBO).',
      'Verify the source of wealth and source of funds for the entire transaction chain.',
      'File a Suspicious Activity Report (SAR) if the corporate structure lacks a clear commercial purpose or if UBO information is withheld.'
    ]
  },
  {
    id: 'cs2',
    title: 'Trade-Based Money Laundering (TBML) via Over-Invoicing',
    scenario: 'An electronics import business is found to be consistently over-invoicing for shipments of low-end consumer goods to a subsidiary in a region known for black market currency exchanges. The invoices reflect prices 400% higher than the fair market value of the goods.',
    risks: [
      'Illicit value transfer across borders under the guise of legitimate trade.',
      'Circumvention of currency controls and potential sanctions evasion.',
      'Integration of criminal proceeds into the legitimate economy through business revenue.'
    ],
    recommendedActions: [
      'Implement price verification checks using market data for common trade goods.',
      'Scrutinize shipping documents (bills of lading, certificates of origin) for discrepancies in quantity or quality.',
      'Monitor the relationship between the importer and exporter for unusual patterns of "round-tripping" funds.'
    ]
  },
  {
    id: 'cs3',
    title: 'Nested Correspondent Banking Vulnerability',
    scenario: 'A large international bank provides correspondent banking services to a small regional bank. An audit reveals that the regional bank is allowing several unregulated Money Services Businesses (MSBs) to use its account to process high-volume international wire transfers without performing adequate CDD on the MSB customers.',
    risks: [
      'Lack of transparency regarding the "customer\'s customer" (KYCC).',
      'High risk of the correspondent account being used as a "nested" vehicle for illicit fund flows.',
      'Potential for regulatory fines and severe reputational damage to the international bank.'
    ],
    recommendedActions: [
      'Conduct a thorough review of the respondent bank\'s AML/CFT policies and oversight of its MSB clients.',
      'Restrict or terminate "payable-through" account access for the respondent bank until compliance gaps are addressed.',
      'If the respondent bank fails to provide transparency or improve controls, terminate the correspondent relationship.'
    ]
  }
];

