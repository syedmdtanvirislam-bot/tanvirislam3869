import { StudyTopic, QuizQuestion, CaseStudy, QuizSet, Flashcard } from '../types';

export const studyTopics: StudyTopic[] = [
  {
    id: 'ch1',
    title: 'Chapter 1: Risks and Methods of Money Laundering and Terrorist Financing',
    category: 'Fundamentals',
    description: 'Fundamental concepts, predicate crimes, and sector-specific risk profiles.',
    content: `
      ### 1. Introduction: Money Laundering and Financial Crime
      This module serves as an introduction to money laundering and other types of financial crime, as well as their consequences and risks. Criminals exploit financial institutions and trade networks, use emerging technologies to launder illicit funds, and obscure ownership to evade detection.

      ### 2. Money Laundering: The Three Stages
      Money laundering is generally understood to be the process of concealing or disguising the existence, source, movement, destination, or illegal application of criminally derived property or funds to make them appear legitimate.
      
      *   **Placement**: The first stage involves the physical disposal of cash proceeds derived from illegal activity.
      *   **Layering**: The second stage involves separating illicit proceeds from their source by creating complex layers of financial transactions designed to disguise the audit trail and provide anonymity.
      *   **Integration**: The final stage involves the provision of apparent legitimacy to criminally derived wealth. If the layering process has succeeded, integration places the laundered proceeds back into the economy in such a way that they re-enter the financial system appearing as normal business funds.
      
      ---
      
      ### 3. Common Techniques for Money Laundering
      *   **Structuring, Microstructuring, Smurfing**: Splitting large illicit funds into small transactions to avoid triggering AML reporting thresholds. Microstructuring is typically used with digital asset laundering.
      *   **Digital Asset Laundering**: Using cryptocurrencies, NFTs, and DeFi for pseudonymous cross-border fund transfers, often employing mixing services and privacy coins.
      *   **Money Muling Networks**: Recruiting individuals (mules) to transfer illicit funds between accounts, often through job scams or social engineering.
      *   **Trade-Based Money Laundering (TBML)**: Manipulating trade invoices (over/under-invoicing), multiple invoicing, and phantom shipments to obscure the source of funds.
      *   **Market-Based Money Laundering (MBML)**: Exploiting stocks, bonds, hedge funds, and derivatives to mask fund origins through complex transaction chains.
      *   **Commodity-Based Money Laundering**: Using high-value assets like gold, diamonds, luxury watches, and fine art to transfer value anonymously.
      *   **Shell Companies and Front Businesses**: Shell companies facilitate illicit flows without real business activities. Front businesses mix illegal proceeds with legitimate revenue (e.g., a cash-heavy restaurant inflating sales).
      
      ---
      
      ### 4. Predicate Crimes
      Predicate crimes are specified unlawful activities whose proceeds can give rise to prosecution for money laundering. FATF has identified **21 categories** of predicate offenses:
      1. Participation in an organized criminal group
      2. Terrorism, including terrorist financing
      3. Trafficking in human beings and migrant smuggling
      4. Sexual exploitation, including that of children
      5. Illicit trafficking in narcotic drugs
      6. Illicit arms trafficking
      7. Illicit trafficking of stolen and other goods
      8. Corruption and bribery
      9. Fraud
      10. Counterfeiting currency
      11. Counterfeiting and piracy of products
      12. Environmental crime
      13. Murder and grievous bodily injury
      14. Kidnapping, illegal restraint, and hostage-taking
      15. Robbery or theft
      16. Smuggling
      17. Tax crimes (direct and indirect)
      18. Extortion
      19. Forgery
      20. Piracy
      21. Insider trading and market manipulation

      ### 5. Sanctions Evasion
      Methods of sanctions evasion include:
      *   **Payment-related**: Stripping identifying information from payment instructions.
      *   **Trade-related**: Transshipment, using shell companies, and falsifying invoices.
      *   **Ownership-related**: Using complex corporate structures, proxies, and bearer shares to obscure the ownership of an asset by a designated person.

      ### 6. Bribery and Corruption
      *   **Bribery**: Giving or receiving money or assets in exchange for the improper use of delegated power.
      *   **Corruption**: The misuse of delegated power for personal benefit (includes embezzlement, graft, and influence peddling).
      *   **UK Bribery Act 2010**: One of the world's strictest laws, featuring extraterritorial scope and holding parent firms liable for corrupt activities by subsidiaries.

      ### 7. Tax Evasion vs. Tax Avoidance
      *   **Tax Avoidance**: Legitimate activity of reducing tax owed through legal means (e.g., pre-tax savings).
      *   **Tax Evasion**: Use of illegal practices to avoid paying tax liability (e.g., not declaring income).
      *   **Aggressive Tax Avoidance**: Legal but aggressive interpretation of the law without considering its intent.

      ### 8. Fraud and the Fraud Triangle
      Fraud is an intentional act of criminal deception. The **Fraud Triangle** consists of:
      1. **Pressure (Incentive)**: Financial problems like gambling or debt.
      2. **Opportunity**: Lack of effective internal controls.
      3. **Rationalization**: Convincing oneself that the act is justified.

      ### 10. Detailed Predicate Crimes
      *   **Human Trafficking vs. Human Smuggling**: 
          *   **Trafficking**: Exploitation of individuals (domestic or foreign).
          *   **Smuggling**: Voluntary crossing of borders (only foreign nationals).
          *   **Indicators**: Funnel accounts, TBML schemes, shell companies, and cash-intensive businesses.
      *   **Environmental Crime**: Illegal activity harming human health and nature (wildlife trafficking, illegal logging/mining). Often involves TCOs and corrupt officials.
      *   **Drug Trafficking**: Highly structured global supply chains. Laundering occurs at sourcing (precursors via shell companies/hawala), manufacturing (agribusiness/real estate), and distribution (BMPE, luxury assets, crypto).

      ### 11. Terrorism Financing (TF)
      *   **TF vs. ML**: 
          *   **ML**: Conceals *origin* of illegal funds (Circular pathway).
          *   **TF**: Provides *support* for terrorist activity (Linear pathway). Funds can be legitimate or illegitimate.
      *   **Movement of Funds**: 
          *   **Correspondent Banking**: Vulnerable to nested transactions.
          *   **Prepaid Cards**: Often have low KYC requirements.
          *   **Crypto/Stablecoins**: Rapid conversion and withdrawal through VASPs.
          *   **Alternative Remittance Systems (ARS)**: Informal value transfer systems (e.g., Hawala).

      ### 12. Consequences of Financial Crime
      *   **Economic**: Weakens governments, discourages foreign investment, loses tax revenue, and damages national reputation.
      *   **Social**: Undermines institutions, foster criminality, and causes personal setbacks for victims (especially the elderly).

      ### 13. Banking Sector Risks
      *   **Shell vs. Shelf Companies**: 
          *   **Shell**: No significant assets or operations at incorporation.
          *   **Shelf**: Created and "put on the shelf" for later sale to appear aged/legitimate.
      *   **PEPs (Politically Exposed Persons)**: Individuals in prominent public functions. Includes immediate family and close associates. Risk-based approach: "Once a PEP, always a PEP" vs. time-based de-classification.
      *   **Concentration Accounts**: Centralized accounts (settlement/suspense) that pool funds, potentially obscuring individual transaction trails.

      ### 14. Retail and Commercial Banking Risks
      *   **Retail**: Remote onboarding risks (Deepfakes, Synthetic identities) and Mule accounts.
      *   **Commercial**: Front companies, complex ownership structures, and high-volume/high-value transactions.

      ### 15. Trade Finance Products and Risks
      Trade finance facilitates the movement of goods across borders. Money launderers exploit its complexity through TBML to misrepresent price, quantity, or quality.
      *   **Risks**: Trades booked remotely within group entities, pre-arranged trading, third-party involvement, and uneconomic trading strategies.
      *   **Vulnerable Products**: 
          *   **Letters of Credit**: Misused to create fictitious trade transactions.
          *   **Bills of Exchange**: Manipulated to disguise transaction nature.
          *   **Trade Credit Insurance**: Fraudulent claims used to launder money.
          *   **Factoring and Forfaiting**: Exploited to convert illicit receivables into legitimate funds.

      ### 16. Credit-Related Product Risks
      Lending products include personal loans, home ownership finance, and secured/unsecured loans.
      *   **Early Loan Repayment**: A primary method used to disguise illicit fund origins by converting illegal proceeds into "legitimate" funds ahead of schedule.
      *   **Account Closure Challenges**: Banks face difficulties closing accounts with outstanding balances due to potential write-offs and the risk of accepting illicit funds for repayment.

      ### 17. Card Risks
      *   **Prepaid Cards**: High risk due to being bearer instruments and transferable. Can be purchased/reloaded anonymously with minimal KYC.
      *   **Gift Cards**: Lower risk due to limited use and lower values, but still susceptible.
      *   **Debit Cards**: Risk mitigated by direct link to bank accounts and regulatory oversight.
      *   **Credit Cards**: More likely used in layering and integration stages. Vulnerable to overpayment and rapid pay-downs.

      ### 18. Credit Unions and Building Societies Risks
      These member-centric institutions face unique challenges:
      *   **Membership Structure**: Mutual trust can lead to less rigorous scrutiny.
      *   **Smaller-scale Operations**: May lack resources for comprehensive AML programs.
      *   **Localized Base**: While lower risk for ML, they may still be used for terrorist financing.

      ### 19. Private Banking and Wealth Management Risks
      PBWM offers personalized services to high-net-worth individuals.
      *   **Culture of Discretion**: The close relationship between managers and customers can lead to overlooking warning signs.
      *   **Conflict of Interest**: Compensation often based on Assets Under Management (AUM) creates pressure to ignore risks.
      *   **High-Risk Products**: 
          *   **Trust Funds**: Opacity makes tracing UBOs difficult.
          *   **Sovereign Wealth Funds (SWFs)**: Large sums and PEP involvement increase risk.
          *   **High-Value Assets**: Real estate, fine art, and precious metals are attractive due to easy transfer of ownership.

      ### 20. Trust Risks
      Trusts separate legal title from control.
      *   **Secrecy**: In many jurisdictions, trusts are private arrangements with no registration requirement.
      *   **Complexity**: Often used as the last layer of secrecy in complex structures spanning multiple jurisdictions.
      *   **Roles**: Settlor (establishes trust), Trustee (manages assets), and Beneficiary (receives benefits).

      ### 21. Offshore Financial Center (OFC) Risks
      OFCs (offshore booking centers) provide services to non-residents.
      *   **Red Flags**: Complex ownership, shell companies, lack of transparency, and "Round Tripping" (moving funds out and back in to appear as foreign investment).

      ### 22. Special Purpose Vehicle (SPV) Risks
      SPVs are legal entities created for specific, limited purposes.
      *   **Risks**: Opaque structures used to disguise UBOs and layer illicit funds through a web of transactions.
      *   **Pooled Investment Vehicles (PIVs)**: Can be used in Ponzi schemes and insider trading.

      ### 23. Corporate and Investment Banking Risks
      *   **Market Manipulation**: 
          *   **Front-running**: Trading based on knowledge of pending customer orders.
          *   **Tailgating**: Trading immediately after large customer orders.
          *   **Churning**: Excessive trading to generate commissions.
          *   **Spoofing**: Fake orders to manipulate prices.
          *   **Insider Trading**: Trading on nonpublic material information.
      *   **Wire Transfer Risks**: International transfers (SWIFT) are high-risk due to speed and volume. Red flags include unusual timing, complex paths, and missing beneficiary info.
      *   **Fundraising Risks**: IPOs, sponsorships, and bond issuance can mask illicit funds. Crowdfunding is particularly vulnerable due to its decentralized nature.

      ### 24. Correspondent Banking Risks
      One bank (correspondent) acts as an agent for another (respondent).
      *   **Nesting**: When a respondent bank allows other banks to use its correspondent account, further shielding the parties involved.
      *   **Arm's Length**: Correspondents process transactions for individuals they haven't verified.

      ### 25. Capital Markets Risks
      *   **Commodity Trading**: Raw materials (oil, gold) are attractive due to daily price fluctuations and high liquidity.
      *   **Foreign Exchange (FX)**: The largest financial market, used to move money across borders and obscure origins through forwards and options.
      *   **Primary vs. Secondary Markets**: Primary (issuance) risks include IPO abuse; Secondary (trading) risks include high volume and anonymity.

      ### 26. Nonbank Financial Institutions (NBFIs) Risks
      NBFIs like Payment Service Providers (PSPs) and Money Services Businesses (MSBs) face unique challenges.
      *   **PSPs**: Include aggregators, card issuers, and mobile wallets. Risks include fraud, chargebacks, and data breaches.
      *   **MSBs**: Provide currency exchange and money transfers. Often serve unbanked customers, increasing cash and cross-border risks.
      *   **Hawala (IVTS)**: Informal remittance systems based on trust, often unregulated and lacking transparency.

      ### 27. E-commerce Risks
      E-commerce platforms (B2C, B2B, C2C, C2B, D2C) are vulnerable to:
      *   **Consumer Fraud**: Non-delivery of goods.
      *   **Front Companies**: Legitimate-appearing stores used to launder funds (e.g., drug sales disguised as T-shirt sales).
      *   **Red Flags**: Prices inconsistent with market value, and high-frequency low-value transactions.

      ### 28. Insurance Product Risks
      The insurance sector is primarily involved in the **integration stage**.
      *   **High-Risk Products**: High-value life insurance and investment-linked policies (ILIs).
      *   **Red Flags**: Early termination after cooling-off period, premium overpayments from third parties, and early cash surrenders.
      *   **Maritime Insurance**: Linked to TBML through misclassification of goods, phantom shipping (non-existent shipments), and undershipment.

      ### 29. Securities and Brokerage Risks
      Vulnerable during **layering and integration stages**. Unique because it can both launder and *generate* illicit funds (e.g., through market manipulation).
      *   **Risks**: Complex products, offshore accounts, and high-speed electronic trading.
      *   **Asset Managers**: Handle large volumes of capital. Products like ETFs, derivatives, hedge funds, and private equity can obscure investor identities.

      ### 30. Custodial Services Risks
      Custodian banks safeguard assets like stocks and bonds.
      *   **Risks**: Shell companies and nominee accounts concealing true ownership.
      *   **Reliance Risk**: Relying on other banks to perform KYC (false sense of security).
      *   **Chain Complexity**: Multiple customers in a chain obscure beneficial ownership.

      ### 31. Cryptoassets Industry Ecosystem
      *   **Blockchain (DLT)**: Decentralized, immutable, and transparent public ledger.
      *   **VASPs**: Virtual Asset Service Providers (Exchanges, Wallet Providers).
      *   **DeFi**: Financial services on smart contracts without intermediaries.
      *   **Assets**: 
          *   **Cryptocurrencies**: Bitcoin, Ethereum (highly volatile).
          *   **Stablecoins**: Pegged to fiat (USDT, USDC) or other assets. Types: Fiat-collateralized, Crypto-collateralized, and Algorithmic.
          *   **NFTs**: Unique digital assets. Risks include overpricing and anonymity.
      *   **Mixers and Tumblers**: Centralized or decentralized services used to hide the source of funds by mixing coins from multiple users (e.g., Wasabi Wallet/CoinJoin).

      ### 32. Central Bank Digital Currency (CBDC)
      A digital version of fiat currency issued by a central bank (legal tender).
      *   **Benefits**: Payment efficiency, cost reduction, and real-time monitoring to deter illicit activity.
      *   **Examples**: Sand Dollar (Bahamas), eNaira (Nigeria), Jam-Dex (Jamaica).

      ---

      ### 33. High-Risk Business Sectors
      Certain non-bank sectors are considered high-risk due to their ability to facilitate anonymity and move large sums of money.

      #### 33.1 Trust and Company Service Providers (TCSPs)
      TCSPs act as gatekeepers but can be exploited to obscure **Ultimate Beneficial Ownership (UBO)**.
      *   **Nominee Services**: TCSPs often provide third parties to act on behalf of customers in ownership and management roles (directors, officers, or shareholders). These nominee structures can be used to conceal the identity of the UBO or operator, creating a layer of anonymity that heightens money laundering risks through obfuscation.
      *   **Shelf Companies**: Pre-registered entities with "clean" histories sold to customers looking to bypass procedural requirements or expedite formation. They typically have clean histories and can be established with fake ownership structures, complicating the ability of financial institutions and regulatory authorities to identify the actual UBOs.
      *   **Offshore Company Formation**: Establishing companies outside the customer's home country, usually in low-tax and/or high-secrecy jurisdictions. While they handle administrative tasks and compliance, weak AML regulations in some offshore locations allow criminals to obfuscate true ownership through limited public records and complex international transaction flows.

      #### 33.2 High-Value Asset Risks
      High-value assets are valuable items such as art, antiques, jewelry, precious metals, and expensive goods, such as jets or yachts. These assets pose financial crime risks because they are:
      *   **Often easy to move**: High value in a small, portable form.
      *   **Often easy to hide**: Can be physically concealed or stored in opaque markets.
      *   **Subject to subjective valuation**: Prices can be manipulated to move large sums of money.
      *   **Historically opaque**: Markets often lack transparency regarding buyers and sellers.
      *   **Store of value**: They can be used to store and transfer wealth without physical movement of cash.
      
      **Red Flags for High-Value Assets**:
      *   Transactions involving funds from unknown or suspicious sources.
      *   Large cash purchases without a clear source of funds or supporting documents.
      *   Loan agreements between unrelated third parties without economic justification.
      *   Use of complex ownership structures (shell companies) to obscure UBO.
      *   Transactions between high-risk jurisdictions.
      *   Inconsistent valuations (priced significantly higher or lower than market value).

      #### 33.3 Import/Export Businesses Risks (TBML)
      Trade-based money laundering (TBML) involves disguising proceeds of crime by using trade transactions to legitimize illicit origins.
      *   **Under-invoicing**: Invoicing at a price below fair market value to transfer value to the buyer.
      *   **Over-invoicing**: Invoicing at a price above fair market value to receive more from the buyer.
      *   **Multiple invoicing**: Issuing multiple invoices for the same shipment to justify numerous payments.
      *   **Short-shipping**: Shipping less quantity than invoiced.
      *   **Over-shipping**: Shipping more quantity than invoiced.
      *   **Ghost-shipping**: Fictitious trades where no actual goods are shipped.
      *   **L/C Fraud**: Misusing Letters of Credit to transfer money for nonexistent goods or manipulated prices.
      *   **Dual-Use Goods**: Goods with both military and civilian uses, often used to evade sanctions.

      #### 33.4 Free-Trade Zones (FTZs) Risks
      FTZs are designated areas treated as outside customs territory, offering tax/duty exemptions.
      *   **Systemic Weaknesses**: Inadequate AML/CFT safeguards, minimal oversight, weak inspection procedures, and lack of cooperation with customs.
      *   **Risks**: FTZs enable TBML through tampered paperwork and provide a platform for illegal trades (drugs, ivory, stolen art).

      #### 33.5 Alternative Remittance Systems (ARS)
      ARS (e.g., **Hawala**) are informal systems for transferring value outside legitimate banking, built on trust.
      *   **Mechanics**: Brokers maintain ledgers and settle debts through third-party payments rather than physical cash movement.
      *   **Popularity**: Used by marginalized communities (refugees) and those wanting to avoid digital records. Terrorist financiers often leverage hawalas for anonymity.

      #### 33.6 Charity and NGO Risks
      Charities and NGOs are vulnerable due to public trust, global presence, and access to considerable funds.
      *   **Vulnerabilities**: Cash-intensive nature, proximity to conflict zones, and often minimal regulation.
      *   **Misuse**: Used for terrorist financing, tax evasion, and disguising bribes as charitable donations.

      #### 33.7 Military Organization and Goods Risks
      Military goods (firearms, missiles, nuclear tech) and dual-use goods pose risks of sanctions evasion and WMD proliferation.
      *   **Bribery/Corruption**: High involvement of PEPs in government-owned defense manufacturers.
      *   **Arms Embargoes**: International bans on importing/exporting military goods to targeted jurisdictions.

      #### 33.8 Embassies, Consulates, and Missions
      These relationships pose risk because individuals are usually classified as **PEPs**.
      *   **Higher Risk Indicators**: Substantial cash transactions, activity inconsistent with purpose, funding personal expenses (e.g., education fees) from official accounts, and conducting official business through personal accounts.

      #### 33.9 Drug-Related Businesses Risks
      Legitimate drug-related businesses (e.g., medical cannabis) face risks due to ties to illicit markets.
      *   **Complications**: Jurisdictional conflicts (legal at state level but not federal) and complex supply chains that can obscure illicit sources of funds.

      #### 33.10 Casinos and Gambling
      Casinos are high-risk because they are cash-intensive and provide a way to convert illicit cash into "clean" winnings (chips to cash/check).

      #### 33.11 Real Estate
      The real estate sector is vulnerable during the **integration stage**. Large sums can be laundered through property purchases, often using shell companies or third-party "straw" buyers.
    `
  },
  {
    id: 'ch2',
    title: 'Chapter 2: Global AFC Standards & Regulations',
    category: 'Standards',
    description: 'International standards (FATF, Basel, Wolfsberg) and major regulatory landscapes (US, EU).',
    content: `
      ### 1. Global AFC Frameworks, Governance, and Regulations
      This module covers key global AFC frameworks and guidelines that shape compliance standards worldwide. FATF-style regional bodies, such as MONEYVAL, help implement FATF’s 40 Recommendations, which set global AML/CFT standards.

      ### 2. Financial Action Task Force (FATF)
      The G-7 established the Financial Action Task Force (FATF) in 1989 to coordinate efforts to combat money laundering.
      *   **FATF 40 Recommendations**: A comprehensive action plan for fighting money laundering and terrorist financing worldwide.
      *   **Assessing Implementation**: FATF conducts periodic formal evaluations (Mutual Evaluations) to determine whether jurisdictions have fully and effectively implemented its standards.
      *   **Monitoring Trends**: FATF publishes reports on the latest techniques and trends used by criminals and terrorists.
      *   **High-Risk Jurisdictions**: 
          *   **Grey List**: Jurisdictions under increased monitoring.
          *   **Black List**: High-risk jurisdictions subject to a call for action.

      ### 3. FATF-Style Regional Bodies (FSRBs)
      FSRBs are autonomous regional organizations (e.g., MONEYVAL, APG) that assist in implementing FATF’s standards. They identify regional threats, facilitate cooperation, and assist with mutual evaluations.

      ### 4. The FATF 40 Recommendations Categories
      FATF groups the Recommendations into seven broad categories:
      1.  AML/CFT policies and coordination
      2.  Money laundering and confiscation
      3.  Terrorist financing and financing of proliferation
      4.  Preventive measures
      5.  Transparency and beneficial ownership
      6.  Powers and responsibilities of competent authorities
      7.  International cooperation

      ### 5. FATF 11 Immediate Outcomes (IOs)
      FATF measures effectiveness using 11 Immediate Outcomes (IOs), rated from Low to High:
      *   **IO 1**: Risk, policy, and coordination.
      *   **IO 2**: International cooperation.
      *   **IO 3**: Supervision.
      *   **IO 4**: Preventive measures.
      *   **IO 5**: Legal persons and arrangements (Transparency).
      *   **IO 6**: Financial intelligence.
      *   **IO 7**: ML investigation and prosecution.
      *   **IO 8**: Confiscation.
      *   **IO 9**: TF investigation and prosecution.
      *   **IO 10**: TF preventive measures and financial sanctions.
      *   **IO 11**: Proliferation financial sanctions.

      ### 6. FATF Mutual Evaluation Process
      A peer review process (average 18 months) with two components:
      *   **Effectiveness**: Focus of an on-site visit to collect evidence of operational results.
      *   **Technical Compliance**: Review of laws and regulations.
      
      **The 7 Stages**: Assessor Training → Technical Review → Scoping Note → On-site Visit → Draft MER → FATF Plenary Adoption → Publication and Follow-up.

      ### 7. FATF Guidance for Risk Assessment
      FATF promotes a risk-based approach through a six-step best-practice framework:
      1.  **Environmental Scan**: Evaluate economic, political, and legal factors.
      2.  **Analytical Scan**: Collect and analyze ML/TF data.
      3.  **Threat Analysis**: Identify key actors and methods.
      4.  **Vulnerability Analysis**: Assess weaknesses in financial systems.
      5.  **Risk Assessment**: Assign risk levels and develop mitigation plans.
      6.  **Horizon Scanning**: Monitor emerging trends and future threats.

      ### 8. United Nations (UN) AFC Guidance
      The UN assists Member States through several agencies and initiatives:
      *   **UNODC**: Assists in combating ML, TF, and transnational organized crime.
      *   **GPML**: Helps develop robust AML programs and coordinates international cooperation.
      *   **Vienna 1988 Convention**: Addressed drug trafficking and defined ML offenses.
      *   **Palermo Convention (2000)**: Addressed organized crime, ML, and corruption.
      *   **UN Security Council (UNSC)**: Authority to impose sanctions (e.g., Resolutions 1267, 1373).

      ### 9. World Bank and International Monetary Fund (IMF)
      The World Bank and IMF have cooperated since the early 2000s to combat money laundering and terrorist financing.
      *   **Role**: Raising awareness, developing assessment methodologies, building institutional capacity, and researching the global economy.
      *   **Reference Guide**: They jointly publish the *Reference Guide to Anti-Money Laundering and Combating the Financing of Terrorism*, a primary resource for national FIUs.
      *   **Observer Status**: Both organizations hold Observer status with FATF.

      ### 10. Organisation for Economic Co-operation and Development (OECD)
      Founded in 1961, the OECD establishes evidence-based international standards.
      *   **Anti-Bribery Convention (1997)**: The first international instrument focused on the "supply side" of bribery (the person offering the bribe).
      *   **Working Group on Bribery**: Evaluates jurisdiction implementation and enforcement of the Convention.
      *   **Topics**: Digital currencies, beneficial ownership, tax crime, and conflict financing (gold flows).

      ### 11. Basel Committee on Banking Supervision (BCBS)
      Established in 1974, BCBS is the primary global standard-setter for bank regulation.
      *   **Mandate**: Enhance the global banking system through strengthened regulation and supervision.
      *   **Key Principles**: Customer identification, compliance with laws, ethical standards, and staff training.
      *   **Three Lines of Defense**:
          1. **First Line**: Business units that identify and control risks.
          2. **Second Line**: AML compliance and internal controls.
          3. **Third Line**: Internal audit functions.

      ### 12. Egmont Group
      An international network of national FIUs established in 1995.
      *   **Functions**: Information sharing, capacity building, collaboration, and standard-setting for FIU operational autonomy.
      *   **Governing Documents**: Egmont Charter, Principles for Information Exchange, and Operational Guidance for FIUs.

      ### 13. Wolfsberg Group
      An association of global banks (established in 2000) that develops policies for managing financial crime risk.
      *   **Key Principles**: AML Principles for Private Banking, Correspondent Banking, and Risk-Based Approach guidance.
      *   **Provisions**: KYC, EDD for PEPs, Source of Wealth/Funds investigation, and ongoing monitoring.

      ### 14. International Organization of Securities Commissions (IOSCO)
      The global standard-setter for financial market regulation.
      *   **Objectives**: Investor protection, fair/efficient markets, and financial stability.
      *   **Guidance**: AML Guidance for Collective Investment Schemes (2005) and Policy Recommendations for Crypto and Digital Asset Markets (2023).

      ### 15. Other International Organizations
      *   **G-20 Anti-Corruption Working Group (ACWG)**: Recommends ways to contribute to international anti-corruption efforts. Works with the **Stolen Assets Recovery Initiative (StAR)**.
      *   **Transparency International (TI)**: A non-governmental organization focused on stopping corruption. Publishes the **Corruption Perceptions Index (CPI)** and **Bribe Payers Index (BPI)**.
      *   **Basel Institute on Governance**: Focuses on asset recovery (ICAR), anti-corruption research, and the **Basel AML Index**.
      *   **Tax Justice Network (TJN)**: Researches tax havens and financial secrecy. Publishes the **Financial Secrecy Index** and **Corporate Tax Haven Index**.

      ### 16. US AML/CFT Regulatory Landscape
      
      #### Bank Secrecy Act (BSA)
      The US's most important AML regulation (1970).
      *   **Reporting Requirements**: CTRs, SARs, FBARs, and CMIRs.
      *   **Five Pillars**: Internal controls, AML officer, training, independent audit, and CDD.
      
      #### USA PATRIOT Act (2001)
      Strengthened AML/CFT measures globally.
      *   **Section 311**: Designating jurisdictions of primary money laundering concern.
      *   **Section 312**: EDD for foreign correspondent banking and private banking.
      *   **Section 313**: Prohibition of shell banks.
      *   **Section 314**: Information sharing (a: Govt-to-FI, b: FI-to-FI).
      *   **Section 319**: Forfeiture from US correspondent accounts.

      #### Anti-Money Laundering Act of 2020 (AML Act)
      Modernizes US banking laws.
      *   **Beneficial Ownership Database**: National registry with FinCEN.
      *   **Expanded Scope**: Includes cryptocurrencies, art, and antique dealers.
      *   **Whistleblower Protection**: Enhanced protections for alerting authorities.
      *   **SAR Usefulness**: Transforming SARs into tools for intelligence gathering.

      ---

      ### 17. Other Laws and Regulations Impacting Organizations

      #### Data Security and Privacy
      Financial institutions have a high duty of care for customer data.
      *   **GDPR (EU)**: One of the strictest privacy laws globally. Applies to organizations established in the EU/EEA or those offering goods/services to EU/EEA data subjects.
      *   **Data Retention**: Jurisdictions have specific rules on how long data should be stored and when it must be destroyed.
      *   **Physical Protection**: Physical data must be protected (e.g., not left on desks overnight).
      *   **Electronic Storage**: Prohibits use of unapproved databases, desktop folders, or USB sticks.

      #### Digital Operational Resilience Act (DORA)
      An EU regulation (effective Jan 2025) aimed at strengthening the cybersecurity of the financial services sector.
      *   **ICT Risk Management**: Robust control systems coordinated by an independent function.
      *   **Incident Reporting**: Prompt reporting of significant ICT incidents.
      *   **Resilience Testing**: Yearly vulnerability assessments and triennial threat-led penetration tests.
      *   **Third-Party Risk**: Ex-ante due diligence and ongoing monitoring of vendors.

      #### AI Regulations
      Jurisdictions are introducing AI regulations to address transparency, accountability, and safety.
      *   **US**: Executive Order 14179 (2025) encourages innovation over regulation.
      *   **EU AI Act**: Categorizes AI models by risk level and imposes corresponding requirements.
      *   **UK**: Principles-based approach with flexibility for specific sectors.
      *   **China**: Focuses on "deep synthesis" (deep fakes) and national development plans.
      *   **Singapore**: National AI Strategy 2.0 focuses on a trusted and inclusive ecosystem.

      #### ESG Regulations
      Environmental, Social, and Governance (ESG) frameworks steer business practices toward sustainable development.
      *   **Environmental**: Impact on the planet (e.g., anti-pollution rules).
      *   **Social**: Relationships with stakeholders (e.g., human rights, forced labor).
      *   **Governance**: Leadership, transparency, and board composition.
      *   **Intersection with AML**: ESG helps identify threats like environmental crime (illegal mining/logging) and social impacts (human trafficking/modern slavery).
    `
  },
  {
    id: 'ch3',
    title: 'Chapter 3: Building an AFC Compliance Program',
    category: 'Compliance',
    description: 'Internal control systems, the Five Pillars, and the Three Lines of Defense.',
    content: `
      ### 1. Chapter Overview
      This module is built upon "The Pillars of an AML Program" and the "Three Lines of Defense" model, focusing on the internal control systems of financial institutions.

      ### 2. Core Framework
      
      #### The Five Pillars of an AML/CFT Program:
      1. **Internal Policies, Procedures, and Controls**: Written guidelines for the institution.
      2. **Designated Compliance Officer**: The individual responsible for overseeing the program.
      3. **Ongoing Employee Training**: Ensuring staff are educated and aware of risks.
      4. **Independent Audit Function**: Regularly testing the program's effectiveness.
      5. **Customer Due Diligence (CDD)**: Processes to verify identity and assess risk.

      #### Three Lines of Defense (LOD) Model:
      *   **1st Line: Business Unit**: Front office and branch staff who identify risks during onboarding and transactions. Responsible for QC (Quality Control).
      *   **2nd Line: AML/Compliance Department**: Responsible for monitoring, policy creation, and oversight. Includes the MLRO. Responsible for QA (Quality Assurance).
      *   **3rd Line: Internal Audit**: Independent body that objectively assesses the effectiveness of the first two lines.

      ---

      ### 3. Financial Crime Functions' Structure
      *   **AML Advisory**: Interprets regulatory requirements and supports business units.
      *   **Sanctions Advisory**: Monitors sanctioned entities and manages licenses/exemptions.
      *   **Transaction Monitoring (TM)**: Reviews alerts generated by systems.
      *   **Data Analytics**: Identifies risk patterns and trends using analytical models.
      *   **Investigations**: Conducts deep-dives into suspicious activity and prepares SARs.
      *   **Policies Management**: Develops and maintains AFC policies.
      *   **Regulatory Reporting**: Files CTRs, SARs, and liaises with authorities.
      *   **Compliance Testing**: Conducts periodic reviews of AFC controls.

      ---

      ### 4. Key Technical Processes
      
      - **Risk-Based Approach**: Calculating risk as *Inherent Risk - Mitigating Controls = Residual Risk*.
      - **CDD vs. EDD**: 
        - **CDD**: Standard due diligence for all customers.
        - **EDD**: Enhanced measures for high-risk customers (e.g., PEPs, high-risk jurisdictions).
      - **UBO Identification**: Identifying Ultimate Beneficial Ownership, typically using a **25% threshold** rule.
      - **SAR/STR Filing Lifecycle**: Detection → Investigation → Filing.
      - **Targeted Sanctions**: Asset freezing and prohibition of funds for sanctioned entities.
      
      ---
      
      ### 4. Institutional and Individual Accountability
      *   **Tone at the Top**: Business leaders should use a balanced scorecard for performance evaluation, ensuring that managing risk remains a fundamental part of the role.
      *   **Compliance Empowerment**: The compliance department must be empowered and robust in its approach to providing proper oversight and challenges to the business.
      *   **Regulated vs. Obliged Entities**:
          *   **Regulated**: Direct supervision (Banks, MSBs).
          *   **Obliged**: Broader category including non-financial sectors (Energy, Real Estate, Logistics) subject to ABC and sanctions laws.
      *   **Individual Impact**: Senior leaders (MLROs, BSA Officers) bear personal responsibility. Violations can lead to fines, professional disqualification, and criminal charges.

      ### 5. Financial Crime Risk Types
      *   **Operational Risk**: Loss due to failed internal processes, people, or systems.
      *   **Legal Risk**: Possibility of criminal penalties or unenforceable contracts.
      *   **Concentration Risk**: Over-exposure to a single customer or group.
      *   **Reputational Risk**: Loss of confidence by stakeholders due to perceived weak controls.
      *   **Systemic Risk**: Potential for criminal misuse to destabilize entire markets.

      ### 6. AFC Regulations and Regimes: Introduction
      The regulatory environment impacts the daily work of AFC professionals. Requirements flow from international guidance to national legislation and finally to operational requirements within covered entities.
      
      #### Case Example: Drafting Policies (APAC)
      **Hiroshi**, working for a new financial institution in APAC, must:
      *   Identify financial crime risks (corruption, fraud, ML, sanctions).
      *   Reference global standards (US BSA, EU GDPR).
      *   Account for data-related regulations (GDPR, Chinese Data Security Law).
      *   Consider emerging topics (ESG, AI in AFC).
      
      **Key Takeaways**:
      *   Consider key financial crime risks.
      *   Implement relevant regulations from other jurisdictions (US/EU).
      *   Address data protection and ESG factors.
      *   Enforce thorough risk assessments for new products/tech.

      ### 6. US AML/CFT Regulatory Landscape
      
      #### Bank Secrecy Act (BSA)
      The US's most important AML regulation (1970).
      *   **Reporting Requirements**: CTRs, SARs, FBARs, and CMIRs.
      *   **Five Pillars**: Internal controls, AML officer, training, independent audit, and CDD.
      
      #### USA PATRIOT Act (2001)
      Strengthened AML/CFT measures globally.
      *   **Section 311**: Designating jurisdictions of primary money laundering concern.
      *   **Section 312**: EDD for foreign correspondent banking and private banking.
      *   **Section 313**: Prohibition of shell banks.
      *   **Section 314**: Information sharing (a: Govt-to-FI, b: FI-to-FI).
      *   **Section 319**: Forfeiture from US correspondent accounts.

      #### Anti-Money Laundering Act of 2020 (AML Act)
      Modernizes US banking laws.
      *   **Beneficial Ownership Database**: National registry with FinCEN.
      *   **Expanded Scope**: Includes cryptocurrencies, art, and antique dealers.
      *   **Whistleblower Protection**: Enhanced protections for alerting authorities.
      *   **SAR Usefulness**: Transforming SARs into tools for intelligence gathering.
    `
  },
  {
    id: 'ch4',
    title: 'Chapter 4: Conducting or Supporting Investigations',
    category: 'Investigations',
    description: 'Transaction monitoring, internal investigations, and law enforcement cooperation.',
    content: `
      ### 1. Chapter Overview
      This chapter serves as a blueprint for compliance officers, focusing on the daily operations of transaction monitoring, internal investigations, and interaction with law enforcement.

      ### 2. Internal Investigation Lifecycle
      
      #### Step-by-Step Workflow:
      1. **Detection**: Identifying suspicious activity via monitoring systems, whistleblowing (internal tips), or referrals.
      2. **Investigation**: Reviewing customer profiles, transaction history, KYC data, and external intelligence.
      3. **SAR/STR Decision**: 
         - **Suspicion Confirmed**: File the report within regulatory timelines.
         - **Suspicion Not Confirmed**: Document the decision and rationale (Disposition).
      4. **Account Action**: Based on the institution's risk appetite, decide whether to keep, restrict, or **Close the Account**.

      ---

      ### 3. Law Enforcement Inquiries
      
      - **Subpoenas & Search Warrants**: Legal mandates requiring the bank to provide specific information or allow searches. Legal counsel should always be involved.
      - **Orders to Restrain/Freeze**: Regulatory or court orders to immediately stop the movement of assets.
      - **Requests for Information (USA PATRIOT Act)**:
        - **Section 314(a)**: Government-to-Financial Institution information sharing.
        - **Section 314(b)**: Financial Institution-to-Financial Institution voluntary information sharing.

      ---

      ### 4. Red Flags & Patterns (Searchable Library)
      
      - **Unusual Cash Activity**: Smurfing (structuring), constant round-dollar deposits, or frequent exchanges of small bills for large ones.
      - **Wire Transfer Anomalies**: Structuring transfers to avoid thresholds, or frequent transfers to high-risk/offshore jurisdictions.
      - **Trade-Based AML (TBML)**: Over-invoicing or under-invoicing of goods to move value across borders.
      - **Offshore Financial Center (OFC) Red Flags**: Complex ownership, shell companies, lack of transparency, sudden large flows of funds, and "Round Tripping".
      - **Wire Transfer Red Flags**: High-risk jurisdictions, sanctioned entities, unusual volume/timing, complex paths, and missing beneficiary information.
      - **E-commerce Red Flags**: Prices inconsistent with market value, sales of difficult-to-value goods, use of VPNs to hide location, and unusual counterparty pairs.
      - **SPV Red Flags**: Multiple layers of companies, lack of transparency, and unclear business purpose for the entity.
      - **Funnel Accounts**: Cash deposits made in multiple geographic locations and withdrawn from a single, different location.

      ---

      ### 5. Technical & Regulatory Requirements
      
      - **SAR Filing Timeline (US)**: Generally **30 days** from the date of initial detection (or 60 days if the suspect is unknown).
      - **Tipping Off Rule**: **CRITICAL**. Employees must never inform a customer that a SAR has been filed or that they are under investigation.
      - **Document Retention**: Minimum of **5 years** for all AML-related documentation (KYC, investigation notes, filed reports).

      ---

      ### 6. Internal Investigation Flowchart
      \`\`\`text
      [ ALERT DETECTION ] 
              ↓
      [ INITIAL REVIEW ] → (No Suspicion) → [ CLOSE & DOCUMENT ]
              ↓
      [ DEEP DIVE INVESTIGATION ]
              ↓
      [ SAR/STR COMMITTEE REVIEW ]
              ↓
      (Suspicious?) 
      /           \
    [YES]         [NO]
      ↓             ↓
[ FILE SAR/STR ]  [ DISPOSITION & DOCUMENT ]
      ↓             ↓
[ MONITOR/CLOSE ] [ RESUME NORMAL MONITORING ]
      \`\`\`
    `
  },
  {
    id: 'ch5',
    title: 'Chapter 5: Risk Assessment',
    category: 'Risk Management',
    description: 'Inherent risk, control effectiveness, residual risk, and the risk-based approach.',
    content: `
      ### 1. Introduction to Risk Assessment
      Risk assessment is the foundation of a strong risk management program. It improves decision-making, helps allocate resources effectively, and ensures compliance.

      ### 2. Types of Risk Assessment
      *   **NRA (National Risk Assessment)**: Identifies national-level ML/TF threats.
      *   **SRA (Sectoral Risk Assessment)**: Identifies risks specific to an industry or sector.
      *   **EWRA (Enterprise-Wide Risk Assessment)**: Analyzes risks within an organization, considering customers, jurisdictions, products, and delivery channels.
      *   **CRA (Customer Risk Assessment)**: Evaluates risks associated with individual customers and business relationships.

      ### 3. The Risk-Based Approach (RBA)
      RBA is the process of identifying and understanding ML/TF risks and taking appropriate measures to mitigate them. It focuses effort where the need and impact are greatest.

      ### 4. Risk Appetite and Tolerance
      *   **Risk Appetite**: The level of risk acceptable to an organization within its strategic goals.
      *   **Risk Appetite Statement (RAS)**: A formal document approved by the Board that defines risk limits.
      *   **Zero Appetite**: A refusal to take on certain risks (e.g., no customers from sanctioned countries).

      ### 5. Determining Inherent Risk
      Inherent risk is the risk level *before* any mitigation controls are applied.
      *   **Factors**: Customer industry, transaction volume, geographic location, product complexity, and delivery channel vulnerabilities.
      *   **Matrix**: Typically uses **Likelihood vs. Impact** to categorize risk levels.

      ### 6. Control Effectiveness
      Controls fall into three categories:
      1.  **Preventive**: Measures to prevent crime (e.g., due diligence, recordkeeping).
      2.  **Detective**: Measures to detect crime (e.g., identifying suspicious activity).
      3.  **Corrective**: Measures to remediate (e.g., exiting a relationship, root cause analysis).
      
      **Measuring Effectiveness**:
      *   **Design Effectiveness**: Is the control built correctly to mitigate the risk?
      *   **Operational Effectiveness**: Is the control functioning as intended over time?

      ### 7. Residual Risk
      The formula for residual risk is:
      **Inherent Risk - Control Effectiveness = Residual Risk**
      If residual risk exceeds tolerance, an **Action Plan** is required.

      ### 8. Continuous Risk Assessment
      Risk is dynamic. Re-evaluation is required when:
      *   Material changes occur in the business (new markets, products).
      *   Customer behavior deviates from their profile.
      *   New technologies or trends are identified.
    `
  },
  {
    id: 'ch6',
    title: 'Chapter 6: Use of Guidance & AFC Cooperation',
    category: 'Cooperation',
    description: 'Typology reports, risk assessments (NRA/SRA), and public-private partnerships.',
    content: `
      ### 1. Using Reports and Guidance
      National and international authorities produce documents to help manage AFC programs:
      *   **AFC Reports**: Annual reports from FIUs with statistics and case studies.
      *   **Typologies**: Descriptions of how particular financial crimes operate.
      *   **Red Flags**: Indicator documents explaining what to look for.
      *   **Strategic Intelligence**: Broad views of financial crime types or trends.

      ### 2. National, Sectoral, and Thematic Risk Assessments
      *   **NRA (National Risk Assessment)**: A jurisdiction-wide evaluation of ML/TF threats and vulnerabilities.
      *   **SRA (Sectoral Risk Assessment)**: Focuses on specific sectors (e.g., gaming, virtual assets).
      *   **Thematic Assessment**: Looks at specific issues (e.g., emerging technologies like DeFi).

      ### 3. Cooperation Between Authorities
      *   **Regulators**: Set rules, authorize businesses, and conduct risk-based supervision.
      *   **Law Enforcement (LEA)**: Conduct investigations, bring launderers to justice, and recover assets.
      *   **FIUs (Financial Intelligence Units)**: Receive, analyze, and disseminate financial intelligence (Strategic and Operational analysis).
      *   **International Cooperation**: Vital for transnational crime. Examples include the **J5 Partnership** (Tax authorities of AU, CA, NL, UK, US).

      ### 4. Mutual Legal Assistance (MLA)
      *   **MLATs (Mutual Legal Assistance Treaties)**: Legal basis for sharing evidence between jurisdictions for prosecution.
      *   **EIO (European Investigation Order)**: Facilitates MLA among EU member states.

      ### 5. Cooperation with the Private Sector
      *   **Public-Private Partnerships (PPP)**: Vehicles for sharing information between sectors (e.g., **AUSTRAC Fintel Alliance**).
      *   **Private Sector Collaboration**: Industry bodies (Wolfsberg Group, JMLSG) sharing best practices and typologies.
      *   **Information Sharing**: Legislation like **USA PATRIOT Act Section 314(b)** or UK's **Economic Crime Act 2023** allows FI-to-FI sharing with safe harbor protections.
      *   **COSMIC (Singapore)**: A digital platform for FIs to share information on red-flagged customers.
    `
  },
  {
    id: 'ch7',
    title: 'Final Review & Exam Prep',
    category: 'Review',
    description: 'Combined syllabus output, exam simulator logic, and high-value study assets.',
    content: `
      ### 1. Chapter Overview
      This is not a traditional chapter but a combined output of the entire syllabus (Chapters 1-6) designed to prepare you for the real CAMS exam.

      ### 2. Exam Weightage Guide
      - **Risks and Methods (Ch 1)**: ~20%
      - **International Standards (Ch 2)**: ~20%
      - **Compliance Program (Ch 3)**: ~20%
      - **Investigations (Ch 4)**: ~15%
      - **Cooperation & Guidance (Ch 6)**: ~15%
      - **Review & Strategy (Ch 7)**: ~10%

      ### 3. Final Study Strategy
      - **Focus on the 5 Pillars**: Ensure you can name and describe all five.
      - **Master the Red Flags**: Know the difference between smurfing, structuring, and TBML.
      - **Understand the FATF 40**: Focus on Recommendations 1, 10, 15, and 20.
      - **Review Case Studies**: Practice the "File SAR" vs "Further Investigation" decision.

      ---

      ### 4. Case Study Scenarios
      
      #### Scenario A: High-Risk Customer Interaction
      A customer from a high-risk jurisdiction attempts to open an account with $50,000 in cash. They are reluctant to provide source of wealth documentation.
      **Decision**: Further Investigation Needed (EDD) before onboarding.

      #### Scenario B: Internal Audit Failure
      An independent audit finds that 20% of high-risk files are missing UBO documentation.
      **Decision**: Immediate remediation plan and Board notification.

      #### Scenario C: Cross-Border Wire Complication
      A correspondent bank receives a wire transfer from a shell company in a tax haven with no clear commercial purpose.
      **Decision**: File a SAR/STR and consider terminating the relationship.
    `
  },
  {
    id: 'ch8',
    title: 'Chapter 8: Design Your AFC Program and Controls',
    category: 'Compliance',
    description: 'Governance, oversight, onboarding, and ongoing controls across the customer lifecycle.',
    content: `
      ### 1. Introduction: Designing Your AFC Program
      A robust Anti-Financial Crime (AFC) program is the foundation of an organization's defense against money laundering, terrorist financing, and other illicit activities.

      ### 2. The Five Pillars of an AML/CFT Program
      1. **Internal Policies, Procedures, and Controls**: Written guidelines for the institution.
      2. **Designated Compliance Officer**: The individual responsible for overseeing the program.
      3. **Ongoing Employee Training**: Ensuring staff are educated and aware of risks.
      4. **Independent Audit Function**: Regularly testing the program's effectiveness.
      5. **Customer Due Diligence (CDD)**: Processes to verify identity and assess risk.

      ### 3. Governance Committees
      *   **Board Risk Committee**: Strategic oversight of AFC risks.
      *   **AML Governance Committee**: Oversees program effectiveness and emerging risks.
      *   **High-Risk Customer Review Committee**: Assesses onboarding/EDD for PEPs and high-risk clients.
      *   **Sanctions Oversight Committee**: Ensures compliance with global sanctions programs.

      ### 4. Internal and Regulatory Reporting
      *   **Internal Reporting**: Uses **KRIs** (Key Risk Indicators) and **KPIs** (Key Performance Indicators) to provide data-driven insights for risk oversight and control effectiveness.
      *   **Regulatory Reporting**:
          - **Ongoing**: SARs (suspicious activity), CTRs (threshold-based, e.g., >$10,000 in US).
          - **Periodic**: Annual MLRO reports.

      ### 5. Implementation Across Customer Lifecycle
      1.  **Onboarding**: Identity verification (ID&V), screening (Sanctions/PEP), and Risk Profiling.
      2.  **EDD**: Source of Wealth (SOW) and Source of Funds (SOF) verification for high-risk customers.
      3.  **Transaction Monitoring**: Ongoing analysis of historical activity.
      4.  **Ongoing Screening**: Batch screening (daily) for sanctions/PEP changes.
      5.  **Periodic Review**: Scheduled KYC refreshes (High risk: annual; Medium: 2-3 years; Low: 3-5 years).
      6.  **Offboarding**: Risk-based account closure and exit strategy.

      ### 6. Onboarding Controls (KYC)
      *   **Natural Person**: Requires full legal name, DOB, nationality, address, and government ID (TIN/SSN).
      *   **Legal Person**: Requires business name, type, BRN, TIN, principal place of business, and UBO identification.
      *   **CRA (Customer Risk Assessment)**: Evaluates profile, jurisdiction, product, delivery channel, and transactional behavior.

      ### 7. Quality Control (QC) vs. Quality Assurance (QA)
      *   **QC (Quality Control)**: Focuses on the **output** (e.g., checking if a PEP file has all data points).
      *   **QA (Quality Assurance)**: Focuses on the **process** (e.g., ensuring policies are properly executed).

      ### 8. Ongoing Controls
      *   **Payment Screening**: Real-time, automated screening of transactions before completion.
      *   **Batch Screening**: Systematic review of the entire customer database against updated lists.
      *   **Adverse Media Checks**: Identifying public information linking customers to financial crime risks.

      ### 9. Other Due Diligence Requirements
      Organizations need to address risks from employees who might commit financial crimes or collaborate with criminals. 
      
      *   **KYE (Know Your Employee)**: A robust employee due diligence program lowers risks of internal fraud. Background checks are necessary for all new employees, including contacting former employers, credit checks, sanctions/PEP screening, and adverse media checks. Ongoing compliance checks throughout the employee's lifetime offer further assurance.
      *   **KYV (Know Your Vendor)**: A KYV program helps assess the risk of third-party vendors who might influence employees through bribes. Due diligence typically includes screening the organization and persons acting on its behalf (directors) against sanctions, PEPs, and adverse media lists.
      *   **Cybersecurity for Vendors**: If vendors provide IT services with access to infrastructure, the organization should conduct a cybersecurity check to confirm compliance with its policies.
    `
  },
  {
    id: 'ch9',
    title: 'Chapter 9: Transaction Monitoring and Investigation',
    category: 'Investigations',
    description: 'TM systems, alert review levels, system tuning, and investigation sources.',
    content: `
      ### 1. Introduction: Transaction Monitoring and Investigation
      Transaction monitoring (TM) systems are the technological frameworks that help financial institutions detect suspicious transaction patterns.

      ### 2. Case Study: AML Control Failures at a UK Bank (NatWest)
      In 2021, the UK’s FCA fined **NatWest £264.8 million** for significant failures in its AML controls regarding **Fowler Oldfield**, a jewelry business.
      *   **Scenario**: Fowler Oldfield deposited **£365 million** (including £264 million in cash) despite initial projections of no cash handling.
      *   **Key Failures**: 
          - Mislabeling cash deposits as check deposits, bypassing cash-specific rules.
          - Lack of check-specific monitoring rules for high-risk customers.
          - **Turning off monitoring alerts** because too many were being generated.
          - Fragmented investigations across multiple offices without information sharing.
      *   **Lesson**: Ensure robust risk-sensitive monitoring, correctly label transactions, and avoid disabling alerts to manage backlogs.

      ### 3. Transaction Monitoring versus Payment Screening
      *   **Transaction Monitoring**: Continuous observation *after* onboarding to identify unusual or illicit patterns (ML, tax evasion).
      *   **Payment Screening**: Identifies high-risk individuals and entities *before* transactions are completed.
          - **Name Screening**: Screens customers against sanctions lists during onboarding and via batch screening.
          - **Payment Screening**: Reviews payments in real-time; matches are stopped and held.
          - **Adverse Media/PEP Screening**: Ongoing review of negative news and PEP connections.

      ### 4. Technology Solutions for TM
      *   **Intelligent Contextual Analysis**: Checks if a transaction exceeds a threshold and meets additional criteria (e.g., deviation from peers or history).
      *   **Network Analysis**: Detects patterns among beneficiaries to uncover hidden links (email domains, phone numbers, addresses).
      *   **AI-Powered TM**: Analyzes vast amounts of data in real time to identify suspicious behaviors.

      ### 5. Transaction Monitoring System Tuning
      Tuning is the process of refining parameters to ensure effectiveness and reduce false positives.
      *   **Components**: Scenario setting, customer segmentation, threshold setting, and frequency.
      *   **Testing**: 
          - **ATL (Above-The-Line)**: Testing transactions that *should* be flagged.
          - **BTL (Below-The-Line)**: Testing transactions *below* the threshold to find false negatives.

      ### 6. Alert Generation Scenarios
      *   Structured transactions to avoid detection.
      *   Large cash transactions exceeding thresholds (e.g., US$10,000).
      *   High-turnover or high-velocity remittance compared to peer groups.
      *   Round trip transactions (sent and returned shortly after).
      *   One to N parties or N parties to One without logical explanation.

      ### 7. Procedures for Alert Review
      *   **Level 1 (Initial Review)**: Analyst evaluates validity. Dismisses false positives or escalates.
      *   **Level 2 (Investigation)**: Detailed analysis of patterns, source/destination of funds, KYC info, and open-source research.
      *   **Level 3 (Complex Analysis)**: Senior assessment for highly suspicious or complex cases involving cross-department collaboration.

      ### 8. Other Sources of Investigation
      *   **Internal Referrals**: From fraud, branches, or whistleblowers.
      *   **External Referrals**: From concerned citizens or business partners.
      *   **RFIs (Requests for Information)**: Clarification from counterparties (e.g., USA PATRIOT Act Section 314a/b).
      *   **LEA Requests**: Court orders, subpoenas, and search warrants.
      *   **Tipping Off**: Prohibited. Intentionally or unintentionally alerting the subject. In some jurisdictions, it is a **felony**.
    `
  },
  {
    id: 'ch10',
    title: 'Chapter 10: Concluding Investigations & LEA Coordination',
    category: 'Investigations',
    description: 'SAR structure, duty to report, post-SAR actions, and de-risking.',
    content: `
      ### 1. Introduction: Concluding Investigations and LEA Coordination
      Finalizing investigations involves preparing clear, comprehensive SARs and communicating effectively with FIUs and law enforcement.

      ### 2. Case Study: Failure to File Report (Deutsche Bank)
      In March 2023, BaFin fined **Deutsche Bank €170,000** for failing to submit suspicious transaction reports (STRs) on time.
      *   **Impact**: Delayed filing hindered law enforcement's ability to detect and prevent crime, allowing illicit funds to flow undetected.
      *   **Lesson**: Timely reporting is a critical regulatory requirement (FATF Recommendation 20).

      ### 3. Protecting the Organization
      *   **Attorney-Client Privilege**: Investigations conducted by external legal counsel protect the organization under privilege; internal ones do not.
      *   **Dawn Raids**: Unannounced inspections. Larger orgs conduct "mock" raids to test readiness.

      ### 4. Duty to Report
      *   **Personal Liability**: Individuals face fines or imprisonment for failing to report.
      *   **Willful Blindness**: The "deliberate avoidance of knowledge of the facts." Legally equivalent to actual knowledge of illicit funds.

      ### 5. SAR Structure and Narrative
      The narrative is the most important part, answering: **Who, What, Where, When, Why, and How**.
      *   **Impact Statement**: An introductory sentence designed to compel LEA action.
      *   **Defensive SARs**: Reports filed "just in case" without full research. Burdens LEAs and indicates program deficiencies.

      ### 6. Case Example: SAR for a Family Trust (Citizen Family Trust)
      *   **Scenario**: Unusual activity in the Citizen Family Trust (withdrawals totaling **$10.9M** over three weeks).
      *   **Red Flags**: Rapid withdrawals, high-risk source of funds (windfall/gambling), and contradiction with the stated goal of "building wealth."
      *   **Action**: Initial SAR filed within the 30-day deadline (US FinCEN requirement).

      ### 7. Maintaining an Account After Unusual Activity
      *   **Decision**: Based on risk appetite and law enforcement directives.
      *   **Enhanced Monitoring**: If kept open, perform regular reviews and update account info (purpose/expected activity).
      *   **Lending Relationships**: Difficult to terminate (mortgages, loans). Prevent new accounts instead.

      ### 8. Working with Law Enforcement
      *   **Subpoenas**: Compel production of records within specific deadlines.
      *   **Search Warrants**: Authorize immediate search and seizure.
      *   **Follow the Money**: LEAs use SAR data to identify suspects, networks, and fund movements.

      ### 9. De-risking and Financial Inclusion
      *   **De-risking**: Terminating entire client categories (MSBs, NPOs, Crypto) to avoid risk rather than managing it. Conflicts with FATF's RBA.
      *   **Financial Inclusion**: Ensuring disadvantaged populations have access to services. Approximately **1.4 billion adults** are unbanked globally.
    `
  },
  {
    id: 'ch11',
    title: 'Chapter 11: Tools and Technologies to Fight Financial Crimes',
    category: 'Technology',
    description: 'AI, Machine Learning, Digital Identity, and Data Privacy in AFC compliance.',
    content: `
      ### 1. Introduction: Tools and Technologies to Fight Financial Crimes
      Technology is a critical enabler in the fight against financial crime, allowing organizations to manage vast amounts of data and identify complex risks more efficiently.

      ### 2. Core Technologies
      *   **AI and Machine Learning**: Advanced algorithms that analyze data in real-time to identify suspicious patterns and reduce false positives.
      *   **Robotic Process Automation (RPA)**: Automates high-volume, repetitive tasks like data entry and basic screening.
      *   **Natural Language Processing (NLP)**: Analyzes unstructured data, such as news articles and SAR narratives.
      *   **Graph Databases**: Ideal for visualizing and analyzing complex networks and hidden relationships (Link Analysis).

      ### 3. Technology for Customer Onboarding
      *   **Digital Identity Solutions**: Using electronic databases and biometrics (facial recognition, fingerprints) to verify identity remotely.
      *   **Automated Screening**: Instantly checking names against global sanctions, PEP, and adverse media lists.

      ### 4. Technology for Ongoing Monitoring
      *   **Intelligent Contextual Analysis**: Checks transactions against thresholds and historical behavior/peer groups.
      *   **Network Analysis**: Automatically detects patterns among beneficiaries to uncover connections based on common data features (email, phone, address).

      ### 5. Data Privacy and Preparation
      *   **Data Privacy (e.g., GDPR)**: FIs must balance AML reporting obligations with strict data protection laws.
      *   **Data Preparation**: The process of cleaning and organizing data to ensure accuracy for technology solutions.
      *   **Bias Mitigation**: AI solutions must be tested with diverse data sets to eliminate bias and ensure transparency.
    `
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    title: "Linguistix's Suspicious Transactions",
    scenario: "Joyce, an AFC officer, noticed that Linguistix, a translation service, significantly increased its transaction volume over six months, deviating from initial KYC projections. Many transactions originated from high-risk jurisdictions. Analysis revealed a large transfer associated with an organized drug trafficking group, confirming the business was being used as a front to launder drug proceeds.",
    risks: [
      'Increases in revenue beyond initial KYC projections.',
      'Transactions from high-risk jurisdictions.',
      'Use of a legitimate-appearing business (translation service) as a front.',
      'Drug trafficking as a predicate crime.'
    ],
    recommendedActions: [
      'Enhance transaction monitoring alert management systems.',
      'Apply advanced analytical tools to trace the flow of funds.',
      'Collaborate with specialist financial crime compliance teams.',
      'Implement risk-based strategies to prevent future exploitation.'
    ]
  },
  {
    id: 'cs2',
    title: "Tamayo's Money Mules",
    scenario: "Yamel Guevara Tamayo was sentenced for recruiting over 15 money mules in an international operation involving business email compromise (BEC). The scheme used fraudulent emails to trick victims into wiring funds to accounts opened by mules. Tamayo used structuring and microstructuring (deposits under $1,000) spread across many accounts to evade detection.",
    risks: [
      'Recruitment of money mules through social engineering.',
      'Business Email Compromise (BEC) and cyber-enabled fraud.',
      'Structuring and microstructuring of cash deposits.',
      'Use of personal bank accounts to move illicit proceeds internationally.'
    ],
    recommendedActions: [
      'Enhance cybersecurity awareness to prevent cyber fraud.',
      'Strengthen KYC practices to verify identities and detect suspicious patterns.',
      'Monitor for microstructuring behaviors spread across multiple accounts.',
      'Cooperate with international authorities to trace cross-border wire transfers.'
    ]
  },
  {
    id: 'cs3',
    title: "Komarov's Sanctions Evasion Tactics",
    scenario: "Businessman Alexei Komarov used a shell company, RedStar Solutions, incorporated in a permissive jurisdiction to evade UN sanctions on nuclear weapons proliferation. He used transshipment points and falsified invoices (labeling semiconductors as 'industrial machinery') to continue trading. Illicit proceeds were laundered back to his main company through offshore accounts.",
    risks: [
      'Sanctions evasion as a predicate offense for money laundering.',
      'Use of shell companies and transshipment points.',
      'Falsification of trade invoices to bypass export controls.',
      'Complex financial strategies to obscure proliferation financing.'
    ],
    recommendedActions: [
      'Implement robust sanctions screening and trade finance monitoring.',
      'Verify the legitimacy of shell companies in permissive jurisdictions.',
      'Analyze payment flows for irregular patterns linked to offshore accounts.',
      'Enhance due diligence on customers involved in dual-use goods.'
    ]
  },
  {
    id: 'cs4',
    title: 'FullTechGlobal Corruption Scandal',
    scenario: "FullTechGlobal, a US subsidiary of a UK company, faced accusations of widespread bribery in overseas sales. The company used intermediaries in high-risk jurisdictions, obscuring illicit flows through inflated consultancy fees and fabricated invoicing. The case highlights the extraterritorial reach of the UK Bribery Act 2010.",
    risks: [
      'Bribery and corruption involving foreign public officials.',
      'Use of third-party intermediaries and consultancy fees to mask bribes.',
      'Extraterritorial regulatory risk (UK Bribery Act 2010).',
      'Deficiencies in ABC (Anti-Bribery and Corruption) internal controls.'
    ],
    recommendedActions: [
      'Conduct audits to identify control deficiencies in ABC frameworks.',
      'Enhance monitoring for "consultancy fees" in high-risk jurisdictions.',
      'Include anti-bribery clauses in contracts with intermediaries.',
      'Implement robust oversight of subsidiary activities by parent companies.'
    ]
  },
  {
    id: 'cs5',
    title: "Mr. Wolfe's Terrorist Financing Scheme",
    scenario: "Mr. Wolfe used legitimate import-export and retail businesses to generate income, then diverted portions through privacy-centered cryptocurrencies to support ISIS. Simultaneously, his associates used cybercrimes (ransomware, hacking) and narcotics trafficking to raise funds. They employed TBML, hawala brokers, and bulk cash smuggling to move funds.",
    risks: [
      'Diversion of legitimate funds for terrorist purposes.',
      'Use of privacy-centered cryptocurrencies and unregulated fintech.',
      'Combination of cyber-enabled crime and traditional criminal enterprises.',
      'Use of informal remittance systems (Hawala).'
    ],
    recommendedActions: [
      'Enhance transaction monitoring for structured deposits and rapid inter-jurisdictional layering.',
      'Utilize blockchain analytics to map illicit cryptoasset flows.',
      'Collaborate with national counterterrorism task forces and FIUs.',
      'Implement coordinated asset freezes to disrupt financial channels.'
    ]
  },
  {
    id: 'cs6',
    title: "Danske Bank (Estonia): Shell Company Abuse",
    scenario: "Between 2007-2015, €200 billion of suspicious funds flowed through Danske Bank's Estonian branch. Criminals used UK LLPs and Scottish Limited Partnerships (SLPs) with minimal disclosure requirements. Fictitious transactions and false invoices were used to justify fund movements, while the head office lacked adequate oversight.",
    risks: [
      'Abuse of shell and shelf companies with complex ownership.',
      'Lack of head office oversight over remote/overseas subsidiaries.',
      'Use of fictitious trade transactions and false documentation.',
      'High-volume suspicious flows from high-risk jurisdictions.'
    ],
    recommendedActions: [
      'Implement robust UBO verification for complex corporate structures.',
      'Ensure adequate supervision and regular audits of overseas subsidiaries.',
      'Strengthen EDD for customers using LLPs/SLPs in jurisdictions with low disclosure.',
      'Appoint dedicated MLROs for all significant branches/subsidiaries.'
    ]
  },
  {
    id: 'cs7',
    title: "HSBC (2012): Systemic AML Failure",
    scenario: "HSBC's Mexico operations allowed drug cartels to launder $880 million due to inadequate monitoring and a fragmented compliance framework. The bank prioritized local profit over centralized controls. This led to a record $1.9 billion fine and a five-year deferred prosecution agreement.",
    risks: [
      'Prioritizing business profit over compliance controls (Tone at the Top).',
      'Fragmented and ineffective global compliance framework.',
      'Inadequate transaction monitoring in high-risk jurisdictions.',
      'Operational and reputational damage from systemic failures.'
    ],
    recommendedActions: [
      'Rebalance power dynamics to strengthen central oversight and compliance.',
      'Implement a strategic de-risking process for high-risk jurisdictions.',
      'Overhaul global compliance operations and governance frameworks.',
      'Foster a strong compliance culture that transcends local business interests.'
    ]
  },
  {
    id: 'cs8',
    title: "Samantha's Case: Individual Accountability",
    scenario: "Samantha, an MLRO, was investigated for failing to report significant suspicious transactions. She deliberately neglected compliance alerts and inadequately documented her activities. She faced professional disqualification, heavy fines, and potential criminal charges for obstruction of justice.",
    risks: [
      'Deliberate neglect of compliance obligations by senior leaders.',
      'Failure to maintain accurate documentation of decision-making.',
      'Personal legal and reputational risk for compliance professionals.',
      'Ultimate accountability of the MLRO/BSA Officer for program deficiencies.'
    ],
    recommendedActions: [
      'Ensure rigorous adherence to reporting standards and timelines.',
      'Maintain detailed and appropriate documentation of all compliance activities.',
      'Invest in ongoing professional training to understand personal liability.',
      'Implement independent testing to verify the MLRO\'s performance.'
    ]
  },
  {
    id: 'cs9',
    title: 'Scenario A: High-Risk Customer Interaction',
    scenario: 'A customer from a high-risk jurisdiction attempts to open an account with $50,000 in cash. They are reluctant to provide source of wealth documentation.',
    risks: [
      'High-risk jurisdiction involvement.',
      'Large cash deposit (potential placement stage).',
      'Reluctance to provide source of wealth (red flag for illicit funds).'
    ],
    recommendedActions: [
      'Refuse the cash deposit and onboarding until source of wealth is verified.',
      'Conduct Enhanced Due Diligence (EDD) on the customer.',
      'Consider filing a SAR if the reluctance persists.'
    ]
  },
  {
    id: 'cs10',
    title: 'Scenario B: Internal Audit Failure',
    scenario: 'An independent audit finds that 20% of high-risk files are missing UBO documentation, specifically for entities with complex ownership structures.',
    risks: [
      'Systemic failure in CDD/EDD processes.',
      'Regulatory non-compliance with beneficial ownership rules.',
      'Potential misuse of the institution by shell companies.'
    ],
    recommendedActions: [
      'Implement an immediate remediation plan to update all high-risk files.',
      'Notify the Board of Directors and Senior Management of the audit findings.',
      'Review the adequacy of the compliance officer\'s resources and training.'
    ]
  },
  {
    id: 'cs11',
    title: 'Scenario C: Cross-Border Wire Complication',
    scenario: 'A correspondent bank receives a wire transfer from a shell company in a tax haven with no clear commercial purpose. The respondent bank is also located in a jurisdiction with weak AML controls.',
    risks: [
      'Use of shell companies to obscure fund origins.',
      'Jurisdictional risk (tax haven and weak AML controls).',
      'Lack of commercial purpose for the transaction.'
    ],
    recommendedActions: [
      'File a SAR/STR immediately due to the high risk of money laundering.',
      'Request additional information from the respondent bank regarding the UBO.',
      'Consider terminating the correspondent relationship if such transactions continue.'
    ]
  },
  {
    id: 'cs12',
    title: "CashBayou's Risk Management Challenges",
    scenario: "CashBayou, an e-commerce platform and MSB, discovered unusual transaction patterns where a single buyer used multiple accounts for high-frequency, low-value transactions with a network of sellers in the same jurisdiction. The investigation revealed inadequate KYC governance and insufficient reviews of storefront owners, exposing the platform to money laundering and regulatory suspension risks.",
    risks: [
      'High-frequency, low-value transactions (potential layering).',
      'Inadequate KYC governance for storefront owners.',
      'Operational reliance on multiple financial partners with varying standards.',
      'Regulatory non-compliance leading to service termination.'
    ],
    recommendedActions: [
      'Implement robust KYC and storefront owner verification.',
      'Enhance transaction monitoring for high-frequency patterns.',
      'Foster open communication and alignment with financial partners.',
      'Adopt proactive AML measures to safeguard reputation.'
    ]
  },
  {
    id: 'cs13',
    title: "LotusMall and Illegal Gambling",
    scenario: "LotusMall, a large e-commerce platform, was exploited by an illegal gambling site, LuckyBet. Gamblers funded their accounts via QR codes that appeared as legitimate purchases from fake storefronts on LotusMall. Over CNY¥10 billion was laundered through this network of bogus transactions and fake delivery records.",
    risks: [
      'Use of e-commerce storefronts as front companies.',
      'Collusion between buyers and sellers to move illicit funds.',
      'Inflated prices and false delivery records.',
      'High-frequency transactions for low-value goods.'
    ],
    recommendedActions: [
      'Flag multiple seller accounts linked to a single entity.',
      'Monitor for product listings priced far above market value.',
      'Verify physical delivery of goods for high-volume merchants.',
      'Implement stricter risk control and fraud detection measures.'
    ]
  },
  {
    id: 'cs14',
    title: "Investment Product Misuse (ILI)",
    scenario: "Peter, a retiree, was recommended an investment-linked insurance (ILI) policy with premium financing by his broker, Tom. The policy lost 50% value in a year. Investigation revealed Tom's brother owned the finance company providing loans, and Tom owned the unlicensed offshore firm managing the funds. The promised 15% returns were inconsistent with market norms.",
    risks: [
      'Ownership conflicts and collusion between broker and finance/investment firms.',
      'Use of unlicensed offshore investment firms.',
      'Unrealistic promised returns (red flag for fraud).',
      'Complex product structure (ILI with premium financing) obscuring risks.'
    ],
    recommendedActions: [
      'Apply enhanced due diligence to brokers and affiliated entities.',
      'Monitor ownership structures to detect conflicts of interest.',
      'Require employees/agents to declare external business interests.',
      'Provide targeted AML training emphasizing red flags in ILIs.'
    ]
  },
  {
    id: 'cs15',
    title: "TCSP Exploitation: The Nominee Trap",
    scenario: "A TCSP in a high-secrecy jurisdiction provided nominee directors for a network of shelf companies. These companies were used by a transnational criminal organization to move $500 million across borders. The nominee directors had no knowledge of the business operations and signed documents blindly, effectively masking the true UBO who was a sanctioned individual.",
    risks: [
      'Use of nominee services to obscure UBO identity.',
      'Exploitation of shelf companies with "clean" histories.',
      'Jurisdictional risk (high-secrecy/offshore).',
      'Sanctions evasion through obfuscation.'
    ],
    recommendedActions: [
      'Implement strict KYC for both the customer and the nominee.',
      'Verify the commercial purpose and legitimacy of shelf companies.',
      'Conduct enhanced monitoring for transactions involving offshore entities.',
      'Ensure TCSPs perform regular audits of their nominee arrangements.'
    ]
  },
  {
    id: 'cs16',
    title: 'Suspicious Transactions at Goodwish Jade',
    scenario: "Goodwish Jade (GJ) is a retail shop specializing in jade and precious stones in Macau. An AML review found several cash transactions exceeding US$500,000 occurring at midnight, despite the shop's 10 a.m. to 6 p.m. operating hours. GJ is owned by a BVI offshore company, with UBO Teh Ong, who is linked to brothels and drug sales at his other businesses. The buyers were managers from Ong's businesses earning only US$2,500/month.",
    risks: [
      'Retailers of high-value items used for laundering organized crime proceeds.',
      'Large cash transactions outside usual operating hours.',
      'Offshore ownership in high-risk jurisdictions (BVI).',
      'UBO linked to predicate crimes (prostitution, drug trafficking).',
      'Buyer profiles inconsistent with transaction values (low salary vs. $500k purchase).'
    ],
    recommendedActions: [
      'File a Suspicious Activity Report (SAR) with relevant authorities.',
      'Review and refresh the risk assessment of the customer and its network.',
      'Apply Enhanced Due Diligence (EDD) for businesses with diversified high-risk operations.',
      'Monitor negative media coverage to trigger immediate customer reviews.'
    ]
  },
  {
    id: 'cs17',
    title: 'Implementing AFC Standards at FinTrust',
    scenario: "Amina, a manager at FinTrust (US), trains Drew on handling high-risk scenarios. They discuss a rejected application from a high-net-worth Russian customer. Amina explains that international standards (FATF, Basel, Wolfsberg) are tailored into local laws. She highlights the evolution from the Palermo Convention (2000) to the post-9/11 USA PATRIOT Act, emphasizing that non-compliance leads to multi-million dollar fines, operational restrictions, and criminal prosecution for officers.",
    risks: [
      'Violating sanctions by onboarding customers from sanctioned jurisdictions.',
      'Regulatory fines and reputational damage from weak AFC controls.',
      'Loss of access to the global banking system.',
      'Personal criminal liability for compliance officers (willful violations).'
    ],
    recommendedActions: [
      'Perform Enhanced Due Diligence (EDD) and PEP screening for high-risk applicants.',
      'Implement stricter KYC rules and enhanced transaction monitoring.',
      'Align internal programs with international standards (FATF, Wolfsberg).',
      'Ensure senior management awareness of regulatory consequences.'
    ]
  },
  {
    id: 'cs18',
    title: 'The 1999 Convention and UNSC Resolutions (Madrid Bombings)',
    scenario: "The 2004 Madrid train bombings killed 193 people. Investigations used the 1999 International Convention for the Suppression of the Financing of Terrorism and UNSC Resolution 1373 to track financial flows. Resolution 1267 enabled asset freezing of al-Qaeda associates. The attack led to stronger global CFT frameworks, including Resolutions 1624 (extremist ideology), 2396 (biometric data), and 2462 (preventing TF through banks/charities).",
    risks: [
      'Exploitation of financial systems to fund violent terrorist activities.',
      'Evolving nature of terrorism threats (ideology, foreign fighters).',
      'Use of banks, charities, and informal networks for terrorist financing.'
    ],
    recommendedActions: [
      'Criminalize terrorist financing and enact rapid asset freezing measures.',
      'Enhance intelligence-sharing and financial tracking of suspected networks.',
      'Collect biometric and passenger data to monitor foreign terrorist fighters.',
      'Strengthen laws and regional security cooperation based on UNSC resolutions.'
    ]
  },
  {
    id: 'cs19',
    title: 'Swiss-Asia Financial Services (SAFS): EWRA Failure',
    scenario: "The Monetary Authority of Singapore (MAS) fined SAFS S$2.5 million for failing to update its Enterprise-Wide Risk Assessment (EWRA) despite rapid business expansion. The firm used a static risk model that failed to account for a significant increase in assets under management and the onboarding of high-risk clients. This led to weak CDD, inadequate transaction monitoring, and management oversight failures.",
    risks: [
      'Failure to update EWRA alongside business growth.',
      'Use of a static risk model for a dynamic business environment.',
      'Onboarding high-risk customers without EDD or source of wealth verification.',
      'Inadequate transaction monitoring lacking risk segmentation.'
    ],
    recommendedActions: [
      'Regularly update the EWRA to reflect changes in the business profile.',
      'Ensure AML/CFT controls keep pace with business expansion.',
      'Implement risk-based governance and robust senior management oversight.',
      'Conduct independent risk reviews and enhance the compliance program.'
    ]
  },
  {
    id: 'cs20',
    title: 'Royal Bank of Canada (RBC): Governance Failure',
    scenario: "In December 2023, FINTRAC fined RBC CA$7.475 million for AML/CFT deficiencies. Failures included: 1) Failing to file 16 SARs despite reasonable grounds, 2) Lacking documented governance for updating policies, and 3) Inconsistent guidance on SAR filings that ignored the 'reasonable grounds' threshold.",
    risks: [
      'Weak oversight creating gaps in financial crime controls.',
      'Failure to file SARs as required by law.',
      'Inadequate documentation for policy updates.',
      'Inconsistent internal guidance on reporting thresholds.'
    ],
    recommendedActions: [
      'Ensure Boards and senior leadership actively oversee AML compliance.',
      'Regularly review and update policies to reflect new regulatory requirements.',
      'Conduct regular independent audits and testing of governance structures.',
      'Align internal SAR guidance with regulatory "reasonable grounds" standards.'
    ]
  },
  {
    id: 'cs21',
    title: 'NatWest (UK): Transaction Monitoring Failure',
    scenario: "In 2021, the FCA fined NatWest £264.8 million for failures in monitoring Fowler Oldfield, a gold business. The customer deposited £365 million (including £264 million in cash) despite initial projections of no cash handling. Failures included: 1) Mislabeling cash as checks, 2) Turning off alerts due to high volume, and 3) Fragmented investigations across multiple offices.",
    risks: [
      'Systemic failure to monitor high-risk customers on a risk-sensitive basis.',
      'Incorrect labeling of transactions (cash vs. checks) bypassing rules.',
      'Disabling monitoring systems to manage alert backlogs.',
      'Lack of subject matter expertise in the first line of defense.'
    ],
    recommendedActions: [
      'Ensure robust, risk-sensitive transaction monitoring for all customers.',
      'Correctly label transaction types to trigger appropriate monitoring rules.',
      'Continuously update and tune systems to adapt to changing behavior.',
      'Avoid disabling alerts; instead, allocate adequate resources for review.'
    ]
  },
  {
    id: 'cs22',
    title: 'Deutsche Bank (Germany): STR Delay',
    scenario: "In March 2023, BaFin fined Deutsche Bank €170,000 for failing to submit suspicious transaction reports (STRs) on time. The delay hindered law enforcement's ability to disrupt illicit operations and allowed funds to flow through the system undetected.",
    risks: [
      'Regulatory non-compliance with reporting timelines.',
      'Hindering law enforcement investigations through delays.',
      'Prolonging illicit operations by allowing funds to move.'
    ],
    recommendedActions: [
      'Investigate and report suspicious transactions promptly to the FIU.',
      'Ensure internal processes support meeting regulatory deadlines.',
      'Recognize that timely reporting is critical for preventing financial crime.'
    ]
  },
  {
    id: 'cs23',
    title: 'Citizen Family Trust: SAR Case Example',
    scenario: "North Bank detected unusual activity in the Citizen Family Trust: large withdrawals ($10.9M total via two transactions of $4.3M and $6.6M) over three weeks, inconsistent with the profile of board members nearing retirement. The source of funds was a 'windfall' from gambling/lottery, contradicting the stated goal of 'building wealth'.",
    risks: [
      'Large, rapid withdrawals inconsistent with customer profile.',
      'High-risk source of funds (windfall/gambling).',
      'Contradiction between stated account purpose and actual behavior.'
    ],
    recommendedActions: [
      'File an initial SAR with a robust narrative answering Who, What, Where, When, Why, How.',
      'Include an Impact Statement to compel law enforcement action.',
      'Attach relevant transaction records and internal review notes.',
      'Maintain strict confidentiality to avoid tipping off the customer.'
    ]
  }
];

export const quizSets: QuizSet[] = [
  {
    id: 'q1',
    title: 'Quiz: Chapter 1 - Risks and Methods',
    questions: [
      { id: 'q1-1', question: "In the 'Linguistix' case study, what was the primary red flag?", options: ['The company had too many employees', 'Large, rounded wire transfers from offshore accounts that did not match the business profile', 'The company used a local bank', 'The directors were well-known in the community'], correctAnswer: 1, explanation: "Large, rounded amounts from offshore sources that don't align with a company's stated business are classic red flags for front companies.", category: 'Case Studies', difficulty: 'medium' },
      { id: 'q1-2', question: "What is the primary risk associated with 'Tamayo's money mules'?", options: ['The students were overpaid', 'The use of legitimate personal accounts to move illicit funds and obscure the source', 'The bank accounts were opened online', 'The commission paid was too high'], correctAnswer: 1, explanation: "Money mules are used to provide a layer of distance between the criminal and the illicit funds by using 'clean' accounts.", category: 'Case Studies', difficulty: 'medium' },
      { id: 'q1-3', question: 'Which of the following is a "social" consequence of financial crime?', options: ['Loss of bank license', 'Increased funding for terrorism and erosion of social values', 'Regulatory fines', 'Reputational damage'], correctAnswer: 1, explanation: 'Financial crime provides the resources for further criminal activity and undermines the rule of law in society.', category: 'Fundamentals', difficulty: 'easy' },
      { id: 'q1-4', question: 'Which banking service is most vulnerable to "Nesting"?', options: ['Retail Savings', 'Correspondent Banking', 'Mortgage Lending', 'Credit Cards'], correctAnswer: 1, explanation: 'Nesting occurs when a respondent bank allows other banks to use its correspondent account, hiding the ultimate customer.', category: 'Sector Risks', difficulty: 'hard' },
      { id: 'q1-5', question: 'What are the three stages of money laundering?', options: ['Placement, Layering, Integration', 'Collection, Disguise, Spending', 'Onboarding, Monitoring, Reporting', 'Structuring, Smurfing, Laundering'], correctAnswer: 0, explanation: 'The three stages are Placement (entry), Layering (disguise), and Integration (re-entry).', category: 'Fundamentals', difficulty: 'easy' },
      { id: 'q1-6', question: 'Which technique involves splitting large illicit funds into small transactions to avoid reporting thresholds?', options: ['Structuring', 'Nesting', 'Churning', 'Front-running'], correctAnswer: 0, explanation: 'Structuring (or smurfing) is the practice of breaking down large sums of cash into smaller amounts to evade detection.', category: 'Fundamentals', difficulty: 'easy' },
      { id: 'q1-7', question: 'In Trade-Based Money Laundering (TBML), what is "Ghost-shipping"?', options: ['Shipping goods to a different port', 'Fictitious trade where no actual goods are shipped', 'Shipping goods at night', 'Using a shell company as the exporter'], correctAnswer: 1, explanation: 'Ghost-shipping involves creating fake trade documents for goods that are never actually moved.', category: 'Sector Risks', difficulty: 'medium' },
      { id: 'q1-8', question: 'What is the primary difference between a Shell company and a Shelf company?', options: ['Shell companies have assets, Shelf companies do not', 'Shell companies are active, Shelf companies are dormant', 'Shelf companies are pre-registered to appear aged, while Shell companies have no significant assets at incorporation', 'There is no difference'], correctAnswer: 2, explanation: 'Shelf companies are "put on the shelf" to age, making them look more legitimate when later used.', category: 'Sector Risks', difficulty: 'medium' },
      { id: 'q1-9', question: 'Which of the following is a red flag for "Round Tripping" in an Offshore Financial Center (OFC)?', options: ['Funds are sent to a local charity', 'Funds are sent offshore and then returned as "legitimate" foreign investment', 'The customer uses a credit card', 'The account has a high interest rate'], correctAnswer: 1, explanation: 'Round tripping disguises domestic funds as foreign investment to gain tax or secrecy benefits.', category: 'Sector Risks', difficulty: 'hard' },
      { id: 'q1-10', question: 'What is "Front-running" in the context of market manipulation?', options: ['Trading immediately after a large customer order', 'Trading based on knowledge of pending customer orders to profit from the price move', 'Excessive trading to generate commissions', 'Placing fake orders to create a false impression of demand'], correctAnswer: 1, explanation: 'Front-running is an illegal practice where a broker trades ahead of a customer order.', category: 'Sector Risks', difficulty: 'hard' },
      { id: 'q1-11', question: 'Which stage of money laundering is the insurance sector primarily involved in?', options: ['Placement', 'Layering', 'Integration', 'Structuring'], correctAnswer: 2, explanation: 'Insurance is often used in the integration stage, where illicit funds are converted into "clean" policy payouts.', category: 'Sector Risks', difficulty: 'medium' },
      { id: 'q1-12', question: 'What is the "Travel Rule" in the context of crypto-assets?', options: ['A rule for declaring crypto while traveling', 'A requirement for VASPs to share originator and beneficiary information for transfers', 'A ban on cross-border crypto transfers', 'A tax on crypto gains'], correctAnswer: 1, explanation: 'The Travel Rule (FATF Rec 15) requires virtual asset service providers to transmit customer data with transfers.', category: 'Technology', difficulty: 'medium' },
      { id: 'q1-13', question: 'Which of the following is a red flag for high-value assets like fine art?', options: ['The artist is well-known', 'The price is consistent with market value', 'Subjective valuation that allows for price manipulation', 'The buyer provides full KYC documentation'], correctAnswer: 2, explanation: 'Subjective valuation is a key risk as it allows criminals to move large sums under the guise of art sales.', category: 'Sector Risks', difficulty: 'medium' },
      { id: 'q1-14', question: 'What is the primary vulnerability of Free-Trade Zones (FTZs)?', options: ['They have too much regulation', 'Weak oversight and minimal customs inspections', 'They only allow cash transactions', 'They are located in landlocked countries'], correctAnswer: 1, explanation: 'Weak oversight in FTZs makes them attractive for TBML and smuggling.', category: 'Sector Risks', difficulty: 'medium' },
      { id: 'q1-15', question: 'In the "Fraud Triangle", what does "Rationalization" refer to?', options: ['The financial pressure on the individual', 'The lack of internal controls', 'The individual convincing themselves that the act is justified', 'The calculation of the potential profit'], correctAnswer: 2, explanation: 'Rationalization is the internal process of justifying the fraudulent act.', category: 'Fundamentals', difficulty: 'easy' },
      { id: 'q1-16', question: 'Which of the following is a red flag for an Embassy account?', options: ['Official business conducted through official accounts', 'Funding personal education fees from official embassy accounts', 'Low transaction volume', 'The ambassador is a PEP'], correctAnswer: 1, explanation: 'Using official accounts for personal expenses is a major red flag for corruption.', category: 'Sector Risks', difficulty: 'medium' },
      { id: 'q1-17', question: 'What is "Hawala"?', options: ['A type of digital currency', 'An informal value transfer system based on trust and brokers', 'A formal banking system in the Middle East', 'A regulatory body'], correctAnswer: 1, explanation: 'Hawala is an informal remittance system that moves value without physical cash movement.', category: 'Sector Risks', difficulty: 'easy' },
      { id: 'q1-18', question: 'Which of the following is a "Linear" pathway, often associated with Terrorist Financing?', options: ['Money Laundering', 'Terrorist Financing', 'Structuring', 'Layering'], correctAnswer: 1, explanation: 'TF is often linear (source to destination), whereas ML is circular (returning to the criminal).', category: 'Fundamentals', difficulty: 'medium' },
      { id: 'q1-19', question: 'What is the primary risk of "Concentration Accounts"?', options: ['They have too much money', 'They pool funds, potentially obscuring individual transaction trails', 'They are only used by PEPs', 'They are subject to high fees'], correctAnswer: 1, explanation: 'Pooling funds in concentration accounts can hide the identity of individual depositors.', category: 'Sector Risks', difficulty: 'hard' },
      { id: 'q1-20', question: 'Which technique involves stripping identifying information from payment instructions to evade sanctions?', options: ['Nesting', 'Stripping', 'Churning', 'Spoofing'], correctAnswer: 1, explanation: 'Stripping is a common method of sanctions evasion.', category: 'Fundamentals', difficulty: 'medium' },
      { id: 'q1-21', question: 'What is the "Black Market Peso Exchange" (BMPE)?', options: ['A legal currency exchange in Mexico', 'A method used by drug traffickers to convert illicit USD into local currency', 'A type of crypto-asset', 'A trade agreement'], correctAnswer: 1, explanation: 'BMPE is a complex layering/integration technique used by cartels.', category: 'Sector Risks', difficulty: 'hard' },
      { id: 'q1-22', question: 'Which of the following is a red flag for a Casino?', options: ['A customer losing a large amount of money', 'A customer buying chips with cash and cashing out without significant play', 'A customer using a credit card', 'A customer providing their ID'], correctAnswer: 1, explanation: 'Cashing out without play is a classic sign of using a casino for placement.', category: 'Sector Risks', difficulty: 'easy' },
      { id: 'q1-23', question: 'What is the primary risk of "Nominee Services" provided by TCSPs?', options: ['They are too expensive', 'They conceal the true identity of the Ultimate Beneficial Owner (UBO)', 'They are only available in the EU', 'They require too much paperwork'], correctAnswer: 1, explanation: 'Nominees act as "straw men" to hide the real controllers of a company.', category: 'Sector Risks', difficulty: 'medium' },
      { id: 'q1-24', question: 'In TBML, what is "Multiple Invoicing"?', options: ['Invoicing for different goods', 'Issuing several invoices for the same shipment to justify multiple payments', 'Invoicing in different currencies', 'Invoicing multiple customers'], correctAnswer: 1, explanation: 'Multiple invoicing is used to move more money than the value of the goods justifies.', category: 'Sector Risks', difficulty: 'medium' },
      { id: 'q1-25', question: 'Which of the following is a "Predicate Offense" for money laundering according to FATF?', options: ['Tax Avoidance', 'Insider Trading', 'Legal gambling', 'Buying a luxury car'], correctAnswer: 1, explanation: 'Insider trading and market manipulation are among FATF\'s 21 predicate categories.', category: 'Fundamentals', difficulty: 'easy' },
      { id: 'q1-26', question: 'What is the "Placement" stage of money laundering?', options: ['Moving funds through complex layers', 'The physical disposal of cash into the financial system', 'The re-entry of funds into the legitimate economy', 'The reporting of suspicious activity'], correctAnswer: 1, explanation: 'Placement is the entry point for illicit cash.', category: 'Fundamentals', difficulty: 'easy' },
      { id: 'q1-27', question: 'Which of the following is a red flag for Real Estate transactions?', options: ['The buyer uses a mortgage', 'The buyer uses a shell company to obscure ownership', 'The property is sold at market value', 'The buyer is a local resident'], correctAnswer: 1, explanation: 'Shell companies are often used to hide the UBO in real estate laundering.', category: 'Sector Risks', difficulty: 'medium' },
      { id: 'q1-28', question: 'What is "Microstructuring"?', options: ['Structuring with very small amounts, often under $1,000', 'Structuring in a small town', 'Structuring with digital assets only', 'A type of corporate structure'], correctAnswer: 0, explanation: 'Microstructuring is a refined form of structuring used to evade even low-level detection.', category: 'Fundamentals', difficulty: 'medium' },
      { id: 'q1-29', question: 'Which of the following is a risk of "DeFi" (Decentralized Finance)?', options: ['It is too transparent', 'Lack of intermediaries to perform KYC/AML checks', 'It is only used by banks', 'It is too slow'], correctAnswer: 1, explanation: 'The peer-to-peer nature of DeFi makes it difficult to apply traditional AML controls.', category: 'Technology', difficulty: 'hard' },
      { id: 'q1-30', question: 'What is a "Stablecoin"?', options: ['A coin that never changes price', 'A digital currency pegged to a stable asset like fiat currency', 'A coin used in horse racing', 'A type of gold bar'], correctAnswer: 1, explanation: 'Stablecoins aim to provide the benefits of crypto with the stability of fiat.', category: 'Technology', difficulty: 'easy' },
      { id: 'q1-31', question: 'Which of the following is a red flag for Trade Finance?', options: ['The goods are shipped directly to the buyer', 'The trade involves "Ghost-shipping" or non-existent goods', 'The price is consistent with market value', 'The L/C is issued by a major bank'], correctAnswer: 1, explanation: 'Ghost-shipping is a major TBML indicator.', category: 'Sector Risks', difficulty: 'medium' },
      { id: 'q1-32', question: 'What is the primary risk of "Prepaid Cards"?', options: ['They have high interest rates', 'They are bearer instruments that can be used anonymously', 'They are only valid in one country', 'They are difficult to use'], correctAnswer: 1, explanation: 'Prepaid cards can be used like cash but are easier to transport.', category: 'Sector Risks', difficulty: 'medium' },
      { id: 'q1-33', question: 'In the context of ML, what is "Integration"?', options: ['The first stage of laundering', 'The process of making illicit funds appear legitimate and re-entering the economy', 'The reporting of a SAR', 'The training of staff'], correctAnswer: 1, explanation: 'Integration is the final stage where funds look "clean".', category: 'Fundamentals', difficulty: 'easy' },
      { id: 'q1-34', question: 'Which of the following is a red flag for "Human Trafficking"?', options: ['The customer has a high-paying job', 'Frequent deposits into "Funnel Accounts" across different states', 'The customer uses a credit card for groceries', 'The customer has a savings account'], correctAnswer: 1, explanation: 'Funnel accounts are often used to move proceeds of trafficking.', category: 'Sector Risks', difficulty: 'hard' },
      { id: 'q1-35', question: 'What is "Willful Blindness"?', options: ['A medical condition', 'Deliberately ignoring suspicious activity to avoid legal responsibility', 'A type of internal audit', 'A regulatory requirement'], correctAnswer: 1, explanation: 'Willful blindness is a legal concept where "not knowing" is not a defense if you ignored obvious signs.', category: 'Fundamentals', difficulty: 'medium' },
      { id: 'q1-36', question: 'Which of the following is a red flag for "Environmental Crime"?', options: ['A company planting trees', 'Transactions involving shell companies and corrupt officials in the logging industry', 'A company using recycled paper', 'A company paying its taxes'], correctAnswer: 1, explanation: 'Environmental crime often involves complex networks and corruption.', category: 'Sector Risks', difficulty: 'medium' },
      { id: 'q1-37', question: 'What is the "Fraud Triangle" factor that refers to the lack of effective internal controls?', options: ['Pressure', 'Opportunity', 'Rationalization', 'Incentive'], correctAnswer: 1, explanation: 'Opportunity is the factor that allows the fraud to occur.', category: 'Fundamentals', difficulty: 'easy' },
      { id: 'q1-38', question: 'Which of the following is a red flag for "Drug Trafficking"?', options: ['A customer buying a lot of medicine', 'Use of the Black Market Peso Exchange (BMPE) to launder proceeds', 'A customer having a pharmacy', 'A customer using a debit card'], correctAnswer: 1, explanation: 'BMPE is a classic drug money laundering technique.', category: 'Sector Risks', difficulty: 'medium' },
      { id: 'q1-39', question: 'What is the primary risk of "Mixers and Tumblers" in crypto?', options: ['They are too slow', 'They are used to obscure the audit trail of transactions', 'They are only available to banks', 'They have high fees'], correctAnswer: 1, explanation: 'Mixers are designed to provide anonymity, making them high-risk for AML.', category: 'Technology', difficulty: 'medium' },
      { id: 'q1-40', question: 'Which of the following is a red flag for "Sanctions Evasion"?', options: ['A customer buying goods from a local store', 'Transshipment of goods through a third country to hide the ultimate destination', 'A customer using a credit card', 'A customer providing their passport'], correctAnswer: 1, explanation: 'Transshipment is a common method to bypass trade sanctions.', category: 'Fundamentals', difficulty: 'medium' }
    ]
  },
  {
    id: 'q2',
    title: 'Quiz: Chapter 2 - Global Standards',
    questions: [
      { id: 'q2-1', question: 'Which body is responsible for setting the global standards for AML/CFT?', options: ['The World Bank', 'FATF', 'The UN', 'The Wolfsberg Group'], correctAnswer: 1, explanation: 'The Financial Action Task Force (FATF) is the primary global standard-setter.', category: 'Standards', difficulty: 'easy' },
      { id: 'q2-2', question: 'What are the two components of a FATF Mutual Evaluation?', options: ['Technical Compliance and Effectiveness', 'Profit and Loss', 'Internal and External Audit', 'Onboarding and Monitoring'], correctAnswer: 0, explanation: 'Evaluations look at both the laws (technical) and how well they work (effectiveness).', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-3', question: 'Which FSRB is responsible for the European region?', options: ['APG', 'MONEYVAL', 'GAFILAT', 'MENAFATF'], correctAnswer: 1, explanation: 'MONEYVAL is the FATF-style regional body for Europe.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-4', question: 'The Wolfsberg Group is best known for its principles regarding:', options: ['Casino regulation', 'Private and Correspondent Banking', 'Real Estate agents', 'Non-Profit Organizations'], correctAnswer: 1, explanation: 'The Wolfsberg Group is an association of global banks that develops industry standards for AML.', category: 'Standards', difficulty: 'easy' },
      { id: 'q2-5', question: 'Which body is responsible for managing international sanctions lists that FATF members must follow?', options: ['Basel Committee', 'United Nations (UN)', 'Egmont Group', 'Wolfsberg Group'], correctAnswer: 1, explanation: 'The UN Security Council issues sanctions that are binding on all UN member states.', category: 'Standards', difficulty: 'easy' },
      { id: 'q2-6', question: 'What is the primary focus of the OECD Anti-Bribery Convention (1997)?', options: ['The demand side of bribery', 'The supply side of bribery (the person offering the bribe)', 'Tax evasion only', 'Digital currencies'], correctAnswer: 1, explanation: 'It is the first international instrument focused on the person or entity offering a bribe.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-7', question: 'A country is placed on the FATF "Grey List". What does this technically mean?', options: ['The country is subject to a call for counter-measures', 'The country is under increased monitoring and has committed to resolving strategic deficiencies', 'The country is banned from the global financial system', 'The country has achieved full technical compliance'], correctAnswer: 1, explanation: 'The Grey List includes jurisdictions under increased monitoring that are working with FATF to address deficiencies.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-8', question: 'Which organization facilitates cooperation and intelligence sharing among national FIUs?', options: ['Basel Committee', 'Egmont Group', 'Wolfsberg Group', 'IOSCO'], correctAnswer: 1, explanation: 'The Egmont Group is the global network for FIUs.', category: 'Standards', difficulty: 'easy' },
      { id: 'q2-9', question: 'What is the primary focus of the Wolfsberg Group\'s principles for Correspondent Banking?', options: ['Setting interest rates', 'Establishing industry-led standards for due diligence on respondent banks', 'Managing sanctions', 'Regulating crypto'], correctAnswer: 1, explanation: 'Wolfsberg focuses on industry standards for AML/KYC in banking.', category: 'Standards', difficulty: 'easy' },
      { id: 'q2-10', question: 'The TD Bank (2024) case study highlights failures in which regulatory requirement?', options: ['GDPR', 'Bank Secrecy Act (BSA) transaction monitoring', 'MiCA', 'FATF Rec 15'], correctAnswer: 1, explanation: 'TD Bank faced massive fines for systemic failures in its BSA compliance program.', category: 'Case Studies', difficulty: 'hard' },
      { id: 'q2-11', question: 'How many "Immediate Outcomes" (IOs) does FATF use to measure effectiveness?', options: ['5', '11', '40', '21'], correctAnswer: 1, explanation: 'FATF uses 11 IOs to assess the effectiveness of a jurisdiction\'s AML/CFT framework.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-12', question: 'Which FATF Recommendation specifically addresses "New Technologies" including virtual assets?', options: ['Recommendation 1', 'Recommendation 10', 'Recommendation 15', 'Recommendation 20'], correctAnswer: 2, explanation: 'Recommendation 15 covers new technologies and the "Travel Rule" for crypto.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-13', question: 'What is the primary role of the World Bank and IMF in AML/CFT?', options: ['Enforcement', 'Raising awareness and building institutional capacity', 'Issuing sanctions', 'Arresting criminals'], correctAnswer: 1, explanation: 'They provide technical assistance and research to help countries strengthen their regimes.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-14', question: 'The Basel Committee (BCBS) describes how many "Lines of Defense" in a bank\'s AML efforts?', options: ['Two', 'Three', 'Four', 'Five'], correctAnswer: 1, explanation: 'BCBS advocates for three lines of defense: Business Units, Compliance, and Audit.', category: 'Standards', difficulty: 'easy' },
      { id: 'q2-15', question: 'Which UN Convention first defined money laundering offenses in the context of drug trafficking?', options: ['Vienna Convention (1988)', 'Palermo Convention (2000)', 'Madrid Convention', 'Geneva Convention'], correctAnswer: 0, explanation: 'The Vienna Convention was the first to address ML at the international level.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-16', question: 'What is the "Corruption Perceptions Index" (CPI) published by Transparency International?', options: ['A measure of actual bribery cases', 'A ranking of perceived public sector corruption', 'A list of sanctioned individuals', 'A tax haven index'], correctAnswer: 1, explanation: 'The CPI ranks countries based on how corrupt their public sector is perceived to be.', category: 'Standards', difficulty: 'easy' },
      { id: 'q2-17', question: 'Which body is the global standard-setter for financial market (securities) regulation?', options: ['BCBS', 'IOSCO', 'FATF', 'Wolfsberg'], correctAnswer: 1, explanation: 'IOSCO sets standards for the securities sector.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-18', question: 'What is the "Basel AML Index"?', options: ['A list of banks with weak controls', 'An independent ranking assessing a country\'s vulnerability to ML/TF', 'A sanctions list', 'A crypto-asset index'], correctAnswer: 1, explanation: 'The Basel AML Index assesses country-level risk.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-19', question: 'Which organization publishes the "Financial Secrecy Index"?', options: ['FATF', 'Tax Justice Network (TJN)', 'Transparency International', 'World Bank'], correctAnswer: 1, explanation: 'TJN publishes the Financial Secrecy Index to highlight jurisdictions enabling tax abuse.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-20', question: 'What is the primary goal of the G-20 Anti-Corruption Working Group (ACWG)?', options: ['To arrest corrupt officials', 'To recommend ways the G-20 can contribute to international anti-corruption efforts', 'To manage the global economy', 'To issue digital currencies'], correctAnswer: 1, explanation: 'The ACWG focuses on policy recommendations for anti-corruption.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-21', question: 'Which FATF Recommendation addresses "Customer Due Diligence" (CDD)?', options: ['Recommendation 1', 'Recommendation 10', 'Recommendation 15', 'Recommendation 20'], correctAnswer: 1, explanation: 'Recommendation 10 is the core standard for CDD.', category: 'Standards', difficulty: 'easy' },
      { id: 'q2-22', question: 'What is the "Palermo Convention" (2000)?', options: ['A treaty on climate change', 'A UN treaty addressing transnational organized crime, ML, and corruption', 'A banking agreement in Italy', 'A sanctions list'], correctAnswer: 1, explanation: 'The Palermo Convention expanded the scope of international AML efforts.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-23', question: 'Which body provides "Operational Guidance for FIUs"?', options: ['FATF', 'Egmont Group', 'Wolfsberg', 'BCBS'], correctAnswer: 1, explanation: 'The Egmont Group provides guidance specifically for FIU operations.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-24', question: 'What is the "Bribe Payers Index" (BPI)?', options: ['A list of people who took bribes', 'A ranking of exporting countries by their propensity to bribe abroad', 'A tax index', 'A list of corrupt companies'], correctAnswer: 1, explanation: 'The BPI is published by Transparency International.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-25', question: 'Which organization works with the "Stolen Assets Recovery Initiative" (StAR)?', options: ['FATF', 'G-20 ACWG', 'Wolfsberg', 'BCBS'], correctAnswer: 1, explanation: 'The G-20 ACWG works closely with StAR.', category: 'Standards', difficulty: 'hard' },
      { id: 'q2-26', question: 'What is the "Corporate Tax Haven Index"?', options: ['A list of countries with no tax', 'A ranking of jurisdictions that enable corporate tax abuse', 'A list of sanctioned companies', 'A crypto index'], correctAnswer: 1, explanation: 'Published by the Tax Justice Network.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-27', question: 'Which FATF Recommendation requires countries to report suspicious transactions (STRs)?', options: ['Recommendation 1', 'Recommendation 10', 'Recommendation 20', 'Recommendation 40'], correctAnswer: 2, explanation: 'Recommendation 20 is the global standard for STR reporting.', category: 'Standards', difficulty: 'easy' },
      { id: 'q2-28', question: 'What is the primary objective of IOSCO\'s 2023 Policy Recommendations for Crypto?', options: ['To ban crypto', 'To support greater consistency with regulatory frameworks and address market integrity', 'To create a global crypto-asset', 'To tax crypto transactions'], correctAnswer: 1, explanation: 'IOSCO aims to harmonize crypto regulation globally.', category: 'Standards', difficulty: 'hard' },
      { id: 'q2-29', question: 'Which body is the "primary global standard setter for bank regulation"?', options: ['FATF', 'BCBS (Basel Committee)', 'Wolfsberg', 'IMF'], correctAnswer: 1, explanation: 'The Basel Committee (BCBS) sets standards for banking supervision.', category: 'Standards', difficulty: 'easy' },
      { id: 'q2-30', question: 'What is the "Egmont Charter"?', options: ['A list of sanctioned FIUs', 'A document outlining the purpose, structure, and budget of the Egmont Group', 'A treaty on human rights', 'A banking license'], correctAnswer: 1, explanation: 'The Charter is the governing document for the Egmont Group.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-31', question: 'Which FATF Recommendation addresses "International Cooperation"?', options: ['Recommendation 1', 'Recommendation 10', 'Recommendation 20', 'Recommendation 40'], correctAnswer: 3, explanation: 'Recommendation 40 covers the widest range of international cooperation.', category: 'Standards', difficulty: 'easy' },
      { id: 'q2-32', question: 'What is the "Vienna Convention" (1988)?', options: ['A treaty on diplomatic relations', 'A UN convention against illicit traffic in narcotic drugs', 'A trade agreement', 'A sanctions list'], correctAnswer: 1, explanation: 'It was the first international treaty to criminalize money laundering.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-33', question: 'Which organization publishes the "State of Tax Justice" annual report?', options: ['FATF', 'Tax Justice Network (TJN)', 'World Bank', 'OECD'], correctAnswer: 1, explanation: 'TJN highlights global tax abuse in this report.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-34', question: 'What is the "Wolfsberg Anti-Money Laundering Principles for Private Banking"?', options: ['A law in Switzerland', 'Best practices for FIs to mitigate risks with high-net-worth clients and PEPs', 'A list of sanctioned banks', 'A crypto regulation'], correctAnswer: 1, explanation: 'Wolfsberg principles are industry-led best practices.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-35', question: 'Which FATF Recommendation requires countries to identify and assess their ML/TF risks?', options: ['Recommendation 1', 'Recommendation 10', 'Recommendation 15', 'Recommendation 20'], correctAnswer: 0, explanation: 'Recommendation 1 is the "Risk-Based Approach" standard.', category: 'Standards', difficulty: 'easy' },
      { id: 'q2-36', question: 'What is the "International Centre for Asset Recovery" (ICAR)?', options: ['A bank in Basel', 'A specialized division of the Basel Institute on Governance', 'A UN agency', 'A sanctions list'], correctAnswer: 1, explanation: 'ICAR focuses on helping countries recover stolen assets.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-37', question: 'Which organization has "Observer status" with FATF?', options: ['The World Bank and IMF', 'Transparency International', 'The Tax Justice Network', 'All of the above'], correctAnswer: 0, explanation: 'The World Bank and IMF are official observers.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-38', question: 'What is the "OECD Working Group on Bribery"?', options: ['A group that takes bribes', 'A body that evaluates jurisdiction implementation of the Anti-Bribery Convention', 'A tax agency', 'A crypto-asset group'], correctAnswer: 1, explanation: 'The Working Group monitors the enforcement of the convention.', category: 'Standards', difficulty: 'medium' },
      { id: 'q2-39', question: 'Which FATF "Immediate Outcome" (IO) focuses on "Supervision"?', options: ['IO 1', 'IO 3', 'IO 6', 'IO 11'], correctAnswer: 1, explanation: 'IO 3 assesses the effectiveness of AML/CFT supervision.', category: 'Standards', difficulty: 'hard' },
      { id: 'q2-40', question: 'What is the primary difference between FATF "Technical Compliance" and "Effectiveness"?', options: ['Technical is about profit, Effectiveness is about loss', 'Technical is about having the laws, Effectiveness is about how well they work in practice', 'There is no difference', 'Technical is for banks, Effectiveness is for governments'], correctAnswer: 1, explanation: 'Mutual evaluations assess both the framework and its results.', category: 'Standards', difficulty: 'medium' }
    ]
  },
  {
    id: 'q3',
    title: 'Quiz: Chapter 3 - Compliance Programs',
    questions: [
      { id: 'q3-1', question: 'What is the correct formula for calculating Residual Risk?', options: ['Inherent Risk + Control Effectiveness', 'Inherent Risk - Control Effectiveness', 'Inherent Risk / Control Effectiveness', 'Control Effectiveness - Inherent Risk'], correctAnswer: 1, explanation: 'Residual risk is the risk that remains after controls have been applied to the inherent risk.', category: 'Risk Assessment', difficulty: 'easy' },
      { id: 'q3-2', question: 'In the "Three Lines of Defense" model, what is the role of Internal Audit?', options: ['To identify risks at the point of entry', 'To set policies and monitor transactions', 'To provide independent testing of the effectiveness of the first two lines', 'To manage the relationship with the regulator'], correctAnswer: 2, explanation: 'Internal Audit is the third line, providing independent assurance to senior management.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q3-3', question: 'Which of the following is considered the "4th Pillar" of an AML program?', options: ['Customer Due Diligence', 'Designated Compliance Officer', 'Independent Audit Function', 'Ongoing Employee Training'], correctAnswer: 2, explanation: 'The traditional four pillars are: Internal Controls, Compliance Officer, Training, and Independent Audit.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q3-4', question: 'When is Enhanced Due Diligence (EDD) required?', options: ['For all new customers', 'Only for customers from the same country', 'For high-risk scenarios such as PEPs or high-risk jurisdictions', 'For customers with low-value accounts'], correctAnswer: 2, explanation: 'EDD is a risk-based requirement for customers who present a higher risk of money laundering.', category: 'Controls', difficulty: 'easy' },
      { id: 'q3-5', question: 'What is the primary goal of an Enterprise-Wide Risk Assessment (EWRA)?', options: ['To identify the risk of a single customer', 'To evaluate the specific risks faced by an institution across all products, customers, and geographies', 'To calculate the bank\'s profit margin', 'To monitor employee performance'], correctAnswer: 1, explanation: 'EWRA is a comprehensive look at the institution\'s overall risk profile.', category: 'Risk Assessment', difficulty: 'medium' },
      { id: 'q3-6', question: 'According to v7.0, what is the typical threshold for identifying an Ultimate Beneficial Owner (UBO)?', options: ['10%', '25%', '50%', '51%'], correctAnswer: 1, explanation: 'The standard threshold for UBO identification is 25% ownership or control.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q3-7', question: 'Which line of defense is responsible for identifying risks during customer onboarding?', options: ['1st Line (Business Unit)', '2nd Line (Compliance)', '3rd Line (Audit)', 'Board of Directors'], correctAnswer: 0, explanation: 'The 1st Line (Business Unit) is responsible for identifying risks at the point of entry.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q3-8', question: 'What does "Tone at the Top" refer to in an AML program?', options: ['The volume of the alarm system', 'The commitment of the Board and Senior Management to compliance', 'The specific frequency used for encrypted communications', 'The physical location of the compliance office'], correctAnswer: 1, explanation: '"Tone at the Top" refers to the leadership\'s commitment to a strong compliance culture.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q3-9', question: 'What is "Inherent Risk"?', options: ['Risk after controls', 'Risk before any controls are applied', 'Risk that cannot be mitigated', 'Risk of a system failure'], correctAnswer: 1, explanation: 'Inherent risk is the raw risk exposure of an activity or entity.', category: 'Risk Assessment', difficulty: 'easy' },
      { id: 'q3-10', question: 'Which of the following is a "Quantitative" risk indicator?', options: ['Management experience', 'Number of SARs filed', 'Compliance culture', 'Regulatory environment'], correctAnswer: 1, explanation: 'Quantitative indicators are measurable and numeric.', category: 'Risk Assessment', difficulty: 'medium' },
      { id: 'q3-11', question: 'What is the "Risk Appetite" of an institution?', options: ['The amount of money it wants to make', 'The level of risk it is willing to accept to achieve its objectives', 'The total number of customers it has', 'The size of its compliance budget'], correctAnswer: 1, explanation: 'Risk appetite defines the boundaries of acceptable risk.', category: 'Risk Assessment', difficulty: 'medium' },
      { id: 'q3-12', question: 'Which of the following is a "Qualitative" risk factor?', options: ['Transaction volume', 'Complexity of products', 'Number of employees', 'Total assets'], correctAnswer: 1, explanation: 'Qualitative factors are descriptive and subjective.', category: 'Risk Assessment', difficulty: 'medium' },
      { id: 'q3-13', question: 'What is the primary purpose of "Sanctions Screening"?', options: ['To find new customers', 'To ensure the institution is not dealing with prohibited individuals or entities', 'To check credit scores', 'To monitor employee emails'], correctAnswer: 1, explanation: 'Sanctions screening is a mandatory control to prevent dealing with sanctioned parties.', category: 'Controls', difficulty: 'easy' },
      { id: 'q3-14', question: 'What is "Simplified Due Diligence" (SDD)?', options: ['No due diligence at all', 'A lower level of CDD applied to very low-risk customers', 'Due diligence done by a robot', 'Due diligence for employees only'], correctAnswer: 1, explanation: 'SDD is allowed for specific low-risk categories under FATF standards.', category: 'Controls', difficulty: 'medium' },
      { id: 'q3-15', question: 'Which of the following is a "Red Flag" during onboarding?', options: ['Customer provides a valid passport', 'Customer is reluctant to provide information about the source of funds', 'Customer has a local address', 'Customer is a student'], correctAnswer: 1, explanation: 'Reluctance to provide UBO or SOF info is a major red flag.', category: 'Controls', difficulty: 'easy' },
      { id: 'q3-16', question: 'What is "Source of Wealth" (SOW)?', options: ['The money used for a specific transaction', 'The origin of the customer\'s entire body of wealth', 'The customer\'s bank account number', 'The customer\'s salary'], correctAnswer: 1, explanation: 'SOW looks at how the customer accumulated their total net worth.', category: 'Controls', difficulty: 'medium' },
      { id: 'q3-17', question: 'What is "Source of Funds" (SOF)?', options: ['The origin of the customer\'s entire body of wealth', 'The origin of the funds used for a specific transaction or relationship', 'The name of the customer\'s bank', 'The customer\'s credit limit'], correctAnswer: 1, explanation: 'SOF focuses on the specific funds being moved.', category: 'Controls', difficulty: 'medium' },
      { id: 'q3-18', question: 'Which of the following is a "High-Risk" jurisdiction according to FATF?', options: ['A country on the "White List"', 'A country on the "Black List" (Call for Action)', 'A country with a high GDP', 'A country in the G-20'], correctAnswer: 1, explanation: 'Black-listed countries are considered high-risk and subject to counter-measures.', category: 'Risk Assessment', difficulty: 'easy' },
      { id: 'q3-19', question: 'What is the role of the "Compliance Officer" (MLRO)?', options: ['To make the bank profitable', 'To oversee the AML program and act as the point of contact for the FIU', 'To manage the IT department', 'To sell products to customers'], correctAnswer: 1, explanation: 'The MLRO is responsible for the day-to-day operation of the AML framework.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q3-20', question: 'How often should an AML program be independently audited?', options: ['Every month', 'On a regular, risk-based schedule (typically annually or bi-annually)', 'Only when the regulator asks', 'Never'], correctAnswer: 1, explanation: 'Regular independent testing is a core pillar of an AML program.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q3-21', question: 'What is "Transaction Monitoring"?', options: ['Watching customers in the branch', 'The ongoing review of transactions to identify suspicious patterns', 'Counting the money in the vault', 'Checking employee attendance'], correctAnswer: 1, explanation: 'Monitoring is essential to detect activity that deviates from the customer profile.', category: 'Controls', difficulty: 'easy' },
      { id: 'q3-22', question: 'Which of the following is a "Behavioral" red flag?', options: ['A large wire transfer', 'A customer who is unusually nervous or avoids eye contact', 'A high-risk country', 'A complex corporate structure'], correctAnswer: 1, explanation: 'Behavioral flags relate to the customer\'s actions and demeanor.', category: 'Controls', difficulty: 'easy' },
      { id: 'q3-23', question: 'What is "Ongoing Monitoring"?', options: ['Checking a customer once a year', 'The continuous process of keeping customer information and transaction reviews up to date', 'Monitoring the stock market', 'Watching the news'], correctAnswer: 1, explanation: 'CDD is not a one-time event; it must be kept current.', category: 'Controls', difficulty: 'medium' },
      { id: 'q3-24', question: 'What is a "PEP" (Politically Exposed Person)?', options: ['A famous actor', 'An individual entrusted with a prominent public function', 'A wealthy business owner', 'A bank manager'], correctAnswer: 1, explanation: 'PEPs are considered high-risk due to their potential for involvement in bribery and corruption.', category: 'Risk Assessment', difficulty: 'easy' },
      { id: 'q3-25', question: 'Which of the following is an "Internal Control"?', options: ['A government regulation', 'A bank\'s policy on wire transfer limits', 'A FATF Recommendation', 'A news article'], correctAnswer: 1, explanation: 'Internal controls are the policies and procedures implemented by the institution itself.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q3-26', question: 'What is "De-risking"?', options: ['Reducing the risk of a transaction', 'The practice of FIs terminating relationships with entire categories of customers to avoid risk', 'A type of insurance', 'A regulatory requirement'], correctAnswer: 1, explanation: 'De-risking is often criticized as it can drive illicit activity underground.', category: 'Risk Assessment', difficulty: 'medium' },
      { id: 'q3-27', question: 'Which line of defense is responsible for "Quality Assurance" (QA) of the AML program?', options: ['1st Line', '2nd Line (Compliance)', '3rd Line', 'External Auditor'], correctAnswer: 1, explanation: 'Compliance (2nd Line) typically performs QA to ensure the 1st Line is following procedures.', category: 'Compliance', difficulty: 'hard' },
      { id: 'q3-28', question: 'What is the "Risk-Based Approach" (RBA)?', options: ['Treating all customers the same', 'Allocating resources to areas of highest risk', 'Avoiding all risk', 'Taking as much risk as possible'], correctAnswer: 1, explanation: 'RBA is the core principle of modern AML regulation.', category: 'Risk Assessment', difficulty: 'easy' },
      { id: 'q3-29', question: 'Which of the following is a "Product Risk" factor?', options: ['Customer is a PEP', 'Product allows for anonymous transactions', 'Customer is from a high-risk country', 'Customer has a low credit score'], correctAnswer: 1, explanation: 'Product risk relates to the inherent features of the service being offered.', category: 'Risk Assessment', difficulty: 'medium' },
      { id: 'q3-30', question: 'What is "Negative News" screening?', options: ['Reading the sports section', 'Searching for adverse information about a customer in public sources', 'Monitoring the bank\'s stock price', 'Checking the weather'], correctAnswer: 1, explanation: 'Adverse media screening is a key part of EDD.', category: 'Controls', difficulty: 'easy' },
      { id: 'q3-31', question: 'Which of the following is a "Geographic Risk" factor?', options: ['Customer is a lawyer', 'Customer is located in a jurisdiction with high levels of corruption', 'Customer uses a mobile app', 'Customer has a large family'], correctAnswer: 1, explanation: 'Geographic risk relates to the location of the customer or their transactions.', category: 'Risk Assessment', difficulty: 'easy' },
      { id: 'q3-32', question: 'What is "KYC" (Know Your Customer)?', options: ['Knowing the customer\'s name only', 'The process of identifying and verifying the identity of customers', 'Knowing the customer\'s favorite color', 'Knowing the customer\'s family'], correctAnswer: 1, explanation: 'KYC is the foundation of an AML program.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q3-33', question: 'What is "KYB" (Know Your Business)?', options: ['Knowing the bank\'s business', 'The process of identifying and verifying the identity of corporate entities and their UBOs', 'Knowing the competitor\'s business', 'Knowing the stock market'], correctAnswer: 1, explanation: 'KYB is the corporate equivalent of KYC.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q3-34', question: 'Which of the following is a "Delivery Channel" risk?', options: ['Customer is a student', 'Non-face-to-face onboarding', 'Customer is from a low-risk country', 'Customer uses a debit card'], correctAnswer: 1, explanation: 'Delivery channel risk relates to how the customer accesses the service.', category: 'Risk Assessment', difficulty: 'medium' },
      { id: 'q3-35', question: 'What is "Targeted Financial Sanctions"?', options: ['Sanctions against a whole country', 'Sanctions directed at specific individuals or entities', 'A type of tax', 'A fine for a bank'], correctAnswer: 1, explanation: 'Targeted sanctions aim to minimize collateral damage while pressuring specific actors.', category: 'Controls', difficulty: 'medium' },
      { id: 'q3-36', question: 'What is "Proliferation Financing" (PF)?', options: ['Financing a new business', 'Providing funds for the manufacture or acquisition of nuclear, chemical, or biological weapons', 'Financing a political campaign', 'A type of investment'], correctAnswer: 1, explanation: 'PF is a major global security threat addressed by FATF.', category: 'Risk Assessment', difficulty: 'medium' },
      { id: 'q3-37', question: 'Which of the following is a "Control" for PEP risk?', options: ['Closing the account immediately', 'Senior management approval for the relationship', 'Ignoring the PEP status', 'Charging higher fees'], correctAnswer: 1, explanation: 'Senior management sign-off is a standard requirement for PEP relationships.', category: 'Controls', difficulty: 'medium' },
      { id: 'q3-38', question: 'What is "Batch Screening"?', options: ['Screening one customer at a time', 'The periodic screening of the entire customer database against updated sanctions lists', 'Screening employees only', 'A type of transaction monitoring'], correctAnswer: 1, explanation: 'Batch screening ensures that existing customers are checked against new sanctions.', category: 'Controls', difficulty: 'medium' },
      { id: 'q3-39', question: 'What is "Real-Time Screening"?', options: ['Screening after a transaction is completed', 'Screening transactions as they occur to prevent prohibited payments', 'Watching a live news feed', 'Monitoring the stock market'], correctAnswer: 1, explanation: 'Real-time screening is critical for sanctions compliance.', category: 'Controls', difficulty: 'medium' },
      { id: 'q3-40', question: 'Which of the following is a "Mitigant" for high-risk customers?', options: ['Increasing the transaction limits', 'Applying Enhanced Due Diligence (EDD) and more frequent monitoring', 'Reducing the number of staff', 'Ignoring the risk'], correctAnswer: 1, explanation: 'Mitigants are actions taken to reduce the residual risk.', category: 'Controls', difficulty: 'easy' }
    ]
  },
  {
    id: 'q4',
    title: 'Quiz: Chapter 4 - Technology and Investigations',
    questions: [
      { id: 'q4-1', question: 'How does AI/Machine Learning improve transaction monitoring?', options: ['By increasing the number of employees needed', 'By reducing false positives and identifying complex patterns', 'By making the system slower', 'By eliminating the need for a compliance officer'], correctAnswer: 1, explanation: 'AI can analyze vast amounts of data to find subtle patterns that traditional rule-based systems might miss.', category: 'Technology', difficulty: 'medium' },
      { id: 'q4-2', question: 'What is the primary use of RPA in an AML program?', options: ['To conduct complex investigations', 'To automate repetitive tasks like data entry and basic screening', 'To replace senior management', 'To write the annual AML report'], correctAnswer: 1, explanation: 'Robotic Process Automation is best suited for high-volume, low-complexity tasks.', category: 'Technology', difficulty: 'easy' },
      { id: 'q4-3', question: 'Which tool is essential for tracking the flow of funds in virtual assets?', options: ['Excel spreadsheets', 'Blockchain tracing/analytics tools', 'Physical ledger books', 'Traditional bank statements'], correctAnswer: 1, explanation: 'Blockchain analytics tools are needed to navigate the public ledgers of cryptocurrencies.', category: 'Technology', difficulty: 'easy' },
      { id: 'q4-4', question: 'What is the first step an institution should take when suspicious activity is identified?', options: ['Immediately file a SAR', 'Conduct an internal investigation to gather more facts', 'Call the customer to warn them', 'Close the account without notice'], correctAnswer: 1, explanation: 'An internal investigation is necessary to confirm suspicion and gather details for a potential SAR.', category: 'Investigations', difficulty: 'medium' },
      { id: 'q4-5', question: 'A compliance officer is asked by a customer if their account is being investigated due to a recent large transfer. What should the officer do?', options: ['Confirm the investigation but say it is routine', 'Deny any investigation and inform the customer about SAR rules', 'Refuse to provide information and avoid "Tipping Off"', 'Tell the customer to contact the FIU directly'], correctAnswer: 2, explanation: 'The "Tipping Off" rule strictly prohibits informing a customer about an AML investigation or SAR filing.', category: 'Investigations', difficulty: 'hard' },
      { id: 'q4-6', question: 'Under Section 314(b) of the USA PATRIOT Act, what is the nature of information sharing?', options: ['Mandatory sharing between banks and the government', 'Voluntary sharing between financial institutions to identify ML/TF', 'Public disclosure of suspicious customers', 'Sharing of tax records with foreign governments'], correctAnswer: 1, explanation: 'Section 314(b) allows voluntary information sharing between financial institutions.', category: 'Regulations', difficulty: 'medium' },
      { id: 'q4-7', question: 'What is the standard minimum document retention period for AML records?', options: ['2 years', '5 years', '7 years', '10 years'], correctAnswer: 1, explanation: 'The global standard for AML document retention is at least 5 years.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q4-8', question: 'A "Funnel Account" is best described by which pattern?', options: ['One account receiving many small transfers from the same city', 'Deposits made in multiple geographic locations and withdrawn from a single, different location', 'A business account with high volume but low profit', 'An account used only for international wire transfers'], correctAnswer: 1, explanation: 'Funnel accounts use geographic dispersion of deposits to obscure the source of cash.', category: 'Red Flags', difficulty: 'medium' },
      { id: 'q4-9', question: 'In the US, if a suspect is known, a SAR must generally be filed within how many days of detection?', options: ['15 days', '30 days', '60 days', '90 days'], correctAnswer: 1, explanation: 'The standard timeline for filing a SAR in the US when a suspect is identified is 30 days.', category: 'Regulations', difficulty: 'medium' },
      { id: 'q4-10', question: 'What is "Link Analysis"?', options: ['Analyzing the links in a chain', 'A technique used to identify relationships between individuals, accounts, and entities', 'Checking the bank\'s website links', 'A type of crypto-asset'], correctAnswer: 1, explanation: 'Link analysis helps visualize complex networks of illicit activity.', category: 'Investigations', difficulty: 'medium' },
      { id: 'q4-11', question: 'Which of the following is a "Digital Footprint" indicator?', options: ['A customer\'s physical address', 'IP addresses, device IDs, and social media activity', 'A customer\'s bank balance', 'A customer\'s credit score'], correctAnswer: 1, explanation: 'Digital footprints provide valuable data for modern investigations.', category: 'Technology', difficulty: 'medium' },
      { id: 'q4-12', question: 'What is the primary goal of "Regulatory Reporting"?', options: ['To make the bank look good', 'To provide the FIU with information about suspicious or threshold-crossing activity', 'To advertise the bank\'s services', 'To report employee salaries'], correctAnswer: 1, explanation: 'Reporting is the primary way FIs communicate risk to the government.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q4-13', question: 'What is an "FIU" (Financial Intelligence Unit)?', options: ['A type of bank', 'A central national agency responsible for receiving and analyzing SARs', 'A private investigation firm', 'A regulatory body like FATF'], correctAnswer: 1, explanation: 'The FIU is the bridge between the financial sector and law enforcement.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q4-14', question: 'Which of the following is a "Red Flag" for virtual assets?', options: ['Using a well-known exchange', 'Frequent use of "Mixers" or "Tumblers"', 'Holding assets for a long time', 'Using a hardware wallet'], correctAnswer: 1, explanation: 'Mixers are used to hide the source and destination of crypto funds.', category: 'Red Flags', difficulty: 'easy' },
      { id: 'q4-15', question: 'What is "OSINT" (Open Source Intelligence)?', options: ['Intelligence from secret government files', 'Information gathered from publicly available sources like the internet and news', 'A type of malware', 'A banking software'], correctAnswer: 1, explanation: 'OSINT is a critical tool for modern AML investigations.', category: 'Investigations', difficulty: 'easy' },
      { id: 'q4-16', question: 'What is the "Investigation Lifecycle"?', options: ['The time it takes to arrest someone', 'The stages of an investigation from detection to reporting and closure', 'The lifespan of a compliance officer', 'The time a SAR stays in the system'], correctAnswer: 1, explanation: 'The lifecycle ensures a structured approach to handling alerts.', category: 'Investigations', difficulty: 'medium' },
      { id: 'q4-17', question: 'Which of the following is a "Post-Filing" action?', options: ['Identifying the suspicious activity', 'Gathering documents', 'Deciding whether to maintain or close the customer relationship', 'Writing the SAR narrative'], correctAnswer: 2, explanation: 'After filing, the FI must manage the ongoing risk of the customer.', category: 'Investigations', difficulty: 'medium' },
      { id: 'q4-18', question: 'What is a "Subpoena"?', options: ['A search warrant', 'A legal document compelling the production of documents or testimony', 'A type of bank account', 'A regulatory fine'], correctAnswer: 1, explanation: 'Subpoenas are common tools used by law enforcement to gather evidence.', category: 'Investigations', difficulty: 'easy' },
      { id: 'q4-19', question: 'What is a "Search Warrant"?', options: ['A request for documents', 'A court order authorizing law enforcement to search a premises and seize evidence', 'An arrest warrant', 'A type of SAR'], correctAnswer: 1, explanation: 'Warrants are more intrusive than subpoenas and require judicial approval.', category: 'Investigations', difficulty: 'medium' },
      { id: 'q4-20', question: 'What is "Mutual Legal Assistance" (MLA)?', options: ['Banks helping each other', 'The formal process of countries cooperating in legal matters and evidence sharing', 'A type of insurance', 'A trade agreement'], correctAnswer: 1, explanation: 'MLA is essential for cross-border investigations.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q4-21', question: 'Which of the following is a red flag for "Elder Financial Abuse"?', options: ['A customer buying a gift for their grandchild', 'Sudden, large withdrawals or changes in power of attorney by a third party', 'A customer having a joint account with their spouse', 'A customer using a debit card'], correctAnswer: 1, explanation: 'Unusual activity by a third party on an elderly person\'s account is a major red flag.', category: 'Red Flags', difficulty: 'medium' },
      { id: 'q4-22', question: 'What is "Natural Language Processing" (NLP) used for in AML?', options: ['To talk to customers', 'To analyze unstructured data like news articles and SAR narratives', 'To translate bank statements', 'To write code'], correctAnswer: 1, explanation: 'NLP helps automate the analysis of text-heavy data.', category: 'Technology', difficulty: 'hard' },
      { id: 'q4-23', question: 'What is "Graph Database" technology used for?', options: ['To draw charts', 'To visualize and analyze complex networks and relationships', 'To store customer names', 'To calculate interest rates'], correctAnswer: 1, explanation: 'Graph databases are ideal for link analysis and identifying hidden connections.', category: 'Technology', difficulty: 'hard' },
      { id: 'q4-24', question: 'What is the primary risk of "Privacy Coins" (e.g., Monero)?', options: ['They are too expensive', 'They are designed to hide transaction details, making them attractive for illicit use', 'They are only available in the US', 'They are very slow'], correctAnswer: 1, explanation: 'Privacy coins present a significant challenge for blockchain analytics.', category: 'Technology', difficulty: 'medium' },
      { id: 'q4-25', question: 'Which of the following is a "Threshold-Based" report?', options: ['SAR', 'CTR (Currency Transaction Report)', 'Internal audit report', 'Training log'], correctAnswer: 1, explanation: 'CTRs are filed automatically for cash transactions above a certain limit (e.g., $10,000).', category: 'Compliance', difficulty: 'easy' },
      { id: 'q4-26', question: 'What is "Data Privacy" (e.g., GDPR) in the context of AML?', options: ['A rule that says banks can\'t share any data', 'The requirement to protect personal data while still meeting AML obligations', 'A way to hide suspicious activity', 'A tax on data'], correctAnswer: 1, explanation: 'FIs must balance AML reporting with strict data protection laws.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q4-27', question: 'What is a "No-Action Letter"?', options: ['A letter saying the bank did nothing', 'A formal response from a regulator stating they will not take enforcement action in a specific case', 'A type of SAR', 'A training certificate'], correctAnswer: 1, explanation: 'No-action letters provide regulatory certainty in complex situations.', category: 'Compliance', difficulty: 'hard' },
      { id: 'q4-28', question: 'Which of the following is a red flag for "Cyber-Enabled Crime"?', options: ['A customer using an ATM', 'Transactions involving known ransomware wallets or darknet markets', 'A customer buying a computer', 'A customer using a mobile app'], correctAnswer: 1, explanation: 'Crypto-related red flags are increasingly important for detecting cybercrime.', category: 'Red Flags', difficulty: 'medium' },
      { id: 'q4-29', question: 'What is "Transaction Laundering"?', options: ['Washing money in a machine', 'The use of a legitimate merchant account to process transactions for an illegal business', 'A type of TBML', 'A structuring technique'], correctAnswer: 1, explanation: 'Also known as "Factoring", it is a common e-commerce laundering method.', category: 'Red Flags', difficulty: 'hard' },
      { id: 'q4-30', question: 'What is the "Egmont Group" primarily known for?', options: ['Issuing sanctions', 'Providing a secure platform for FIUs to exchange information', 'Regulating banks', 'Arresting criminals'], correctAnswer: 1, explanation: 'The Egmont Group facilitates international cooperation among FIUs.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q4-31', question: 'What is "Linkage" in an investigation?', options: ['The links on a website', 'Connecting disparate pieces of information to form a complete picture of activity', 'A type of bank merger', 'A regulatory requirement'], correctAnswer: 1, explanation: 'Linkage is the goal of the analysis phase of an investigation.', category: 'Investigations', difficulty: 'medium' },
      { id: 'q4-32', question: 'Which of the following is a "Source of Information" for an investigation?', options: ['Internal bank records', 'Public social media profiles', 'Third-party data providers', 'All of the above'], correctAnswer: 3, explanation: 'Investigators use a wide range of internal and external sources.', category: 'Investigations', difficulty: 'easy' },
      { id: 'q4-33', question: 'What is the primary purpose of a "SAR Narrative"?', options: ['To tell a story about the customer', 'To clearly explain the suspicious activity and why it is considered suspicious', 'To fill up space in the report', 'To list the customer\'s family members'], correctAnswer: 1, explanation: 'The narrative is the most important part of the SAR for the FIU.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q4-34', question: 'What is "Confiscation"?', options: ['Borrowing money', 'The permanent deprivation of property by order of a court or other competent authority', 'A type of fine', 'A regulatory requirement'], correctAnswer: 1, explanation: 'Confiscation aims to take the profit out of crime.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q4-35', question: 'What is "Asset Tracing"?', options: ['Drawing a picture of a car', 'The process of identifying and locating assets that are the proceeds of crime', 'A type of internal audit', 'A regulatory requirement'], correctAnswer: 1, explanation: 'Tracing is the first step toward freezing and confiscation.', category: 'Investigations', difficulty: 'medium' },
      { id: 'q4-36', question: 'Which of the following is a red flag for "Corruption"?', options: ['A customer paying their bills on time', 'Unexplained wealth of a public official or their close associates', 'A customer having a savings account', 'A customer using a credit card'], correctAnswer: 1, explanation: 'Corruption often manifests as wealth that cannot be justified by official income.', category: 'Red Flags', difficulty: 'easy' },
      { id: 'q4-37', question: 'What is "Whistleblowing"?', options: ['Playing a musical instrument', 'The reporting of suspected wrongdoing within an organization by an employee', 'A type of transaction monitoring', 'A regulatory requirement'], correctAnswer: 1, explanation: 'Whistleblower protections are essential for a strong compliance culture.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q4-38', question: 'What is "Internal Escalation"?', options: ['Using the elevator', 'The process of reporting suspicious activity from the front line to the compliance department', 'A type of bank promotion', 'A regulatory fine'], correctAnswer: 1, explanation: 'Escalation is the first step in the internal investigation process.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q4-39', question: 'What is "Disposition" in the context of an alert?', options: ['A person\'s mood', 'the final decision made on an alert (e.g., file SAR or close as false positive)', 'A type of bank account', 'A regulatory requirement'], correctAnswer: 1, explanation: 'Dispositioning alerts is a key part of the monitoring workflow.', category: 'Investigations', difficulty: 'medium' },
      { id: 'q4-40', question: 'What is "Feedback" from the FIU?', options: ['A customer complaint', 'Information provided by the FIU to FIs about the quality and utility of their SARs', 'A type of internal audit', 'A regulatory requirement'], correctAnswer: 1, explanation: 'Feedback helps FIs improve their reporting and detection capabilities.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q-final-1', question: 'A bank is reviewing a high-risk customer file and notices that the UBO documentation is missing for a company owning 30% of the entity. According to v7.0 standards, what is the most appropriate action?', options: ['Onboard the customer and request the documents later', 'Refuse to onboard until the UBO is identified and verified', 'Ignore the requirement as it is only 30%', 'File a SAR immediately without further investigation'], correctAnswer: 1, explanation: 'UBO identification is a critical part of CDD. If the threshold (typically 25%) is met, verification is mandatory before onboarding. (Ref: Ch 3, CDD Standards)', category: 'Compliance', difficulty: 'hard' },
      { id: 'q-final-2', question: 'During an investigation, a compliance officer discovers that a front-line employee accidentally informed a customer that their account was being reviewed for suspicious activity. This is a violation of which principle?', options: ['The 314(b) rule', 'The Tipping Off rule', 'The Safe Harbor provision', 'The KYC principle'], correctAnswer: 1, explanation: 'The Tipping Off rule prohibits disclosing that a SAR is being filed or an investigation is underway. (Ref: Ch 4, Investigations)', category: 'Investigations', difficulty: 'hard' },
      { id: 'q-final-3', question: 'Which FATF Recommendation specifically mandates that countries should require financial institutions to report suspicious transactions?', options: ['Recommendation 1', 'Recommendation 10', 'Recommendation 20', 'Recommendation 40'], correctAnswer: 2, explanation: 'Recommendation 20 is the global standard for reporting suspicious transactions (STRs). (Ref: Ch 2, FATF Standards)', category: 'Standards', difficulty: 'hard' },
      { id: 'q-final-4', question: 'An independent audit reveals that the transaction monitoring system has not been updated to include new red flags for crypto-asset mixing services. Which pillar of the AML program is primarily failing?', options: ['Internal Policies and Controls', 'Designated Compliance Officer', 'Ongoing Training', 'Independent Audit'], correctAnswer: 0, explanation: 'The failure to update system rules and red flags falls under the first pillar: Internal Policies, Procedures, and Controls. (Ref: Ch 3, The Pillars)', category: 'Compliance', difficulty: 'hard' },
      { id: 'q-final-5', question: 'A law enforcement agency serves a search warrant on a financial institution. What is the most critical first step for the compliance officer?', options: ['Immediately hand over all requested documents', 'Notify the customer about the warrant', 'Review the warrant with legal counsel to ensure its scope is understood', 'Refuse the warrant until a subpoena is also provided'], correctAnswer: 2, explanation: 'Warrants must be reviewed by legal counsel to ensure compliance with the specific scope and to protect privileged information. (Ref: Ch 4, Law Enforcement)', category: 'Investigations', difficulty: 'hard' },
      { id: 'q-final-6', question: 'A correspondent bank in the US receives a request from a respondent bank in a high-risk jurisdiction to process a wire transfer for a shell company. The respondent bank provides vague information about the UBO. What is the best course of action under the USA PATRIOT Act?', options: ['Process the transfer as it is a one-time request', 'Apply Enhanced Due Diligence (EDD) and potentially refuse the transaction', 'Rely on the respondent bank\'s KYC as per the Wolfsberg principles', 'Only process if the amount is below $10,000'], correctAnswer: 1, explanation: 'The USA PATRIOT Act (Section 312) requires EDD for correspondent accounts maintained for certain foreign financial institutions. (Ref: Ch 2, US Regulations)', category: 'Regulations', difficulty: 'hard' },
      { id: 'q-final-7', question: 'Which of the following scenarios would most likely trigger a "Section 314(a)" request in the US?', options: ['A bank wanting to share info with another bank about a suspicious customer', 'The government requesting info from financial institutions regarding a significant ML/TF investigation', 'A customer requesting their own transaction history', 'An auditor reviewing the bank\'s SAR filing process'], correctAnswer: 1, explanation: 'Section 314(a) is a government-to-financial institution request for information. (Ref: Ch 4, Law Enforcement)', category: 'Regulations', difficulty: 'hard' },
      { id: 'q-final-8', question: 'A compliance officer identifies a pattern of "funnel account" activity across multiple states. After filing a SAR, what is the next logical step according to the investigation lifecycle?', options: ['Immediately close the account', 'Notify the customer of the SAR filing', 'Continue to monitor the account or consider closing based on risk appetite', 'Delete all investigation notes to protect privacy'], correctAnswer: 2, explanation: 'After filing, the institution must decide whether to maintain or close the relationship based on its risk appetite and potential law enforcement requests. (Ref: Ch 4, Lifecycle)', category: 'Investigations', difficulty: 'hard' },
      { id: 'q-final-9', question: 'In a "Three Lines of Defense" model, if a front-line teller fails to identify a PEP during onboarding, which line has failed?', options: ['1st Line', '2nd Line', '3rd Line', 'The Board of Directors'], correctAnswer: 0, explanation: 'The front-line business unit is the 1st Line of Defense and is responsible for initial risk identification. (Ref: Ch 3, Defense Model)', category: 'Compliance', difficulty: 'hard' },
      { id: 'q-final-10', question: 'What is the primary difference between a Subpoena and a Search Warrant?', options: ['A subpoena is for documents, a warrant is for arrests', 'A subpoena requires the recipient to produce info, while a warrant allows law enforcement to search and seize', 'A subpoena is issued by a bank, a warrant by a court', 'There is no difference in the context of AML'], correctAnswer: 1, explanation: 'A subpoena compels the production of evidence, whereas a warrant authorizes law enforcement to enter premises and seize evidence. (Ref: Ch 4, Law Enforcement)', category: 'Investigations', difficulty: 'hard' },
      { id: 'q-final-11', question: 'Which of the following is a red flag for "Trade-Based Money Laundering" (TBML)?', options: ['The price of goods is consistent with market value', 'Significant discrepancies between the description of goods on the invoice and the actual shipment', 'The shipment is sent directly to the buyer', 'The buyer uses a well-known bank'], correctAnswer: 1, explanation: 'Discrepancies in trade documents are a major indicator of TBML. (Ref: Ch 1, TBML)', category: 'Sector Risks', difficulty: 'hard' },
      { id: 'q-final-12', question: 'What is the primary risk of "Nesting" in correspondent banking?', options: ['It makes transactions faster', 'It allows a respondent bank to provide services to other banks without the correspondent bank\'s knowledge', 'It reduces the cost of wire transfers', 'It is only used by major global banks'], correctAnswer: 1, explanation: 'Nesting obscures the ultimate customer and the banks involved, creating significant AML risk. (Ref: Ch 1, Sector Risks)', category: 'Sector Risks', difficulty: 'hard' },
      { id: 'q-final-13', question: 'Under the FATF Recommendations, what is the requirement for "Beneficial Ownership" of legal persons?', options: ['Countries should ensure that there is adequate, accurate, and timely information on the beneficial ownership and control of legal persons', 'Beneficial ownership information should be kept secret', 'Only the bank needs to know the beneficial owner', 'Beneficial ownership is not required for small companies'], correctAnswer: 0, explanation: 'Transparency of beneficial ownership is a core FATF requirement (Rec 24). (Ref: Ch 2, FATF Standards)', category: 'Standards', difficulty: 'hard' },
      { id: 'q-final-14', question: 'A bank discovers that a customer has been using "Mixers" to obscure the source of their crypto-asset deposits. What is the most appropriate next step?', options: ['Ignore it as crypto is legal', 'Conduct an investigation and consider filing a SAR', 'Immediately close the account without investigation', 'Ask the customer for their private keys'], correctAnswer: 1, explanation: 'The use of mixers is a high-risk indicator that requires investigation and potential reporting. (Ref: Ch 4, Technology)', category: 'Investigations', difficulty: 'hard' },
      { id: 'q-final-15', question: 'What is the "Risk-Based Approach" (RBA) as defined by FATF?', options: ['Taking as much risk as possible to maximize profit', 'Identifying, assessing, and understanding risks, and applying resources to mitigate them', 'Avoiding all high-risk customers', 'Treating all customers as high-risk'], correctAnswer: 1, explanation: 'RBA allows FIs to focus their efforts where the risks are highest. (Ref: Ch 2, FATF Standards)', category: 'Standards', difficulty: 'hard' },
      { id: 'q-final-16', question: 'Which of the following is a "Qualitative" factor in an Enterprise-Wide Risk Assessment (EWRA)?', options: ['The total number of high-risk customers', 'The strength of the institution\'s compliance culture', 'The volume of international wire transfers', 'The number of SARs filed'], correctAnswer: 1, explanation: 'Qualitative factors are subjective and relate to the quality of the control environment. (Ref: Ch 3, Risk Assessment)', category: 'Risk Assessment', difficulty: 'hard' },
      { id: 'q-final-17', question: 'What is the primary purpose of "Independent Testing" (the 4th Pillar)?', options: ['To train employees', 'To provide an unbiased evaluation of the effectiveness of the AML program', 'To file SARs', 'To manage the compliance department'], correctAnswer: 1, explanation: 'Independent testing ensures that the program is actually working as intended. (Ref: Ch 3, The Pillars)', category: 'Compliance', difficulty: 'hard' },
      { id: 'q-final-18', question: 'In the context of sanctions, what is "Stripping"?', options: ['Removing clothes', 'Removing identifying information from payment messages to hide the involvement of a sanctioned party', 'A type of TBML', 'A structuring technique'], correctAnswer: 1, explanation: 'Stripping is a common method used to evade sanctions detection. (Ref: Ch 1, Fundamentals)', category: 'Fundamentals', difficulty: 'hard' },
      { id: 'q-final-19', question: 'What is the "Egmont Group" primarily focused on?', options: ['Setting global AML standards', 'Facilitating the exchange of information and cooperation among national FIUs', 'Regulating the insurance sector', 'Arresting drug traffickers'], correctAnswer: 1, explanation: 'The Egmont Group is the global network for Financial Intelligence Units. (Ref: Ch 2, Global Standards)', category: 'Standards', difficulty: 'hard' },
      { id: 'q-final-20', question: 'A compliance officer is reviewing a "Funnel Account" and notices deposits from five different states followed by a single withdrawal in a sixth state. This pattern is most commonly associated with:', options: ['Human Trafficking or Drug Trafficking', 'Legitimate retail business', 'A student receiving money from family', 'A person traveling on vacation'], correctAnswer: 0, explanation: 'Funnel accounts are a classic red flag for moving illicit cash across geographic boundaries. (Ref: Ch 4, Red Flags)', category: 'Red Flags', difficulty: 'hard' }
    ]
  },
  {
    id: 'q5',
    title: 'Quiz: Chapter 5 - Risk Assessment',
    questions: [
      { id: 'q5-1', question: 'What is the correct formula for calculating Residual Risk?', options: ['Inherent Risk + Control Effectiveness', 'Inherent Risk - Control Effectiveness', 'Inherent Risk / Control Effectiveness', 'Control Effectiveness - Inherent Risk'], correctAnswer: 1, explanation: 'Residual risk is the risk that remains after controls have been applied to the inherent risk.', category: 'Risk Assessment', difficulty: 'easy' },
      { id: 'q5-2', question: 'Which type of risk assessment identifies national-level ML/TF threats?', options: ['EWRA', 'CRA', 'NRA', 'SRA'], correctAnswer: 2, explanation: 'National Risk Assessments (NRA) are conducted at the country level.', category: 'Risk Assessment', difficulty: 'easy' },
      { id: 'q5-3', question: 'What was the primary failure in the SAFS case study?', options: ['Failure to file a SAR', 'Failure to update the EWRA during business expansion', 'Failure to hire a compliance officer', 'Failure to use AI'], correctAnswer: 1, explanation: 'MAS fined SAFS for using a static risk model that didn\'t evolve with the business.', category: 'Case Studies', difficulty: 'medium' },
      { id: 'q5-4', question: 'Which category of controls includes "recordkeeping and record retention"?', options: ['Preventive', 'Detective', 'Corrective', 'Administrative'], correctAnswer: 0, explanation: 'Preventive controls aim to stop financial crime before it occurs.', category: 'Controls', difficulty: 'medium' },
      { id: 'q5-5', question: 'What is "Inherent Risk"?', options: ['Risk after controls', 'Risk before any mitigation controls are applied', 'Risk that is impossible to mitigate', 'Risk of a system failure'], correctAnswer: 1, explanation: 'Inherent risk is the raw risk exposure.', category: 'Risk Assessment', difficulty: 'easy' },
      { id: 'q5-6', question: 'What does "Zero Appetite" mean in a Risk Appetite Statement?', options: ['The bank has no customers', 'The bank refuses to take on certain risks entirely', 'The bank has no compliance budget', 'The bank only accepts cash'], correctAnswer: 1, explanation: 'Zero appetite indicates a complete avoidance of specific risk categories.', category: 'Risk Assessment', difficulty: 'medium' },
      { id: 'q5-7', question: 'Which assessment evaluates risks associated with individual business relationships?', options: ['EWRA', 'SRA', 'CRA', 'NRA'], correctAnswer: 2, explanation: 'Customer Risk Assessment (CRA) focuses on individual relationships.', category: 'Risk Assessment', difficulty: 'easy' },
      { id: 'q5-8', question: 'What is "Design Effectiveness" in control testing?', options: ['Whether the control is pretty', 'Whether the control is built correctly to mitigate the intended risk', 'Whether the control is fast', 'Whether the control is cheap'], correctAnswer: 1, explanation: 'Design effectiveness checks if the control\'s logic is sound.', category: 'Controls', difficulty: 'medium' },
      { id: 'q5-9', question: 'When should a Product Risk Assessment be conducted for a new product?', options: ['One year after launch', 'Before the product is offered to customers', 'Only if the regulator asks', 'After the first SAR is filed'], correctAnswer: 1, explanation: 'New products must be assessed before they are launched.', category: 'Risk Assessment', difficulty: 'medium' },
      { id: 'q5-10', question: 'Which FATF Recommendation requires countries to identify and assess their ML/TF risks?', options: ['Recommendation 1', 'Recommendation 10', 'Recommendation 15', 'Recommendation 20'], correctAnswer: 0, explanation: 'Recommendation 1 is the foundation of the Risk-Based Approach.', category: 'Standards', difficulty: 'easy' }
    ]
  },
  {
    id: 'q8',
    title: 'Quiz: Chapter 8 - Design Your AFC Program and Controls',
    questions: [
      { id: 'q8-1', question: 'What is the primary difference between Quality Control (QC) and Quality Assurance (QA)?', options: ['QC focuses on the process, QA focuses on the output', 'QC focuses on the output, QA focuses on the process', 'There is no difference', 'QC is for the 1st line, QA is for the 3rd line'], correctAnswer: 1, explanation: 'QC ensures outputs meet standards, while QA ensures processes are properly executed and improved.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q8-2', question: 'According to the RBC case study, what was one of the key failures identified by FINTRAC?', options: ['The bank had too many employees', 'Failure to file 16 SARs despite reasonable grounds', 'The bank used AI incorrectly', 'The bank was too small'], correctAnswer: 1, explanation: 'FINTRAC found that RBC failed to file 16 SARs and lacked adequate documented governance.', category: 'Case Studies', difficulty: 'medium' },
      { id: 'q8-3', question: 'What is "Horizon Scanning" in the context of AFC policies?', options: ['Looking at the sunset', 'Proactively monitoring emerging issues and regulatory activity', 'Checking customer IDs', 'Reviewing old SARs'], correctAnswer: 1, explanation: 'Horizon scanning helps organizations plan and implement new policies in response to a dynamic environment.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q8-4', question: 'Which committee provides strategic oversight of AFC risks and ensures alignment with global regulations?', options: ['AML Governance Committee', 'Board Risk Committee', 'Sanctions Oversight Committee', 'High-Risk Customer Review Committee'], correctAnswer: 1, explanation: 'The Board Risk Committee provides high-level strategic oversight.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q8-5', question: 'What is the typical review frequency for a high-risk customer?', options: ['Every 5 years', 'Every 3 years', 'Annually', 'Only when a SAR is filed'], correctAnswer: 2, explanation: 'High-risk customers are typically reviewed annually.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q8-6', question: 'Which of the following is a "Trigger Event" for an ad hoc KYC review?', options: ['A customer changing their phone number', 'Business restructuring or change in UBO', 'A customer making a normal deposit', 'The bank hiring a new teller'], correctAnswer: 1, explanation: 'Significant changes like business restructuring or UBO shifts are trigger events.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q8-7', question: 'What is the US threshold for filing a Currency Transaction Report (CTR)?', options: ['$5,000', '$10,000', '$15,000', '$25,000'], correctAnswer: 1, explanation: 'In the US, any cash transaction exceeding $10,000 in a single day requires a CTR.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q8-8', question: 'Which type of screening is performed on an ongoing basis, typically daily, against the entire client list?', options: ['Real-time payment screening', 'Batch screening', 'Onboarding screening', 'Adverse media checks'], correctAnswer: 1, explanation: 'Batch screening is a systematic review of the customer database at scheduled intervals.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q8-9', question: 'What are KRIs and KPIs used for in internal reporting?', options: ['To track employee attendance', 'To provide data-driven insights for risk oversight and control effectiveness', 'To calculate interest rates', 'To market new products'], correctAnswer: 1, explanation: 'KRIs (Key Risk Indicators) and KPIs (Key Performance Indicators) measure risk and control effectiveness.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q8-10', question: 'In the context of PEPs, who are "RCAs"?', options: ['Regulated Compliance Associates', 'Relatives and Close Associates', 'Registered Corporate Agents', 'Risk-Controlled Accounts'], correctAnswer: 1, explanation: 'PEPs include the individuals themselves as well as their Relatives and Close Associates.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q8-11', question: 'What is the primary goal of a KYE (Know Your Employee) program?', options: ['To track employee vacation time', 'To lower the risk of internal fraud or collaboration with criminals', 'To calculate employee bonuses', 'To monitor employee social media'], correctAnswer: 1, explanation: 'KYE involves background checks and ongoing compliance monitoring of staff.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q8-12', question: 'Which of the following should be included in a vendor (KYV) due diligence process?', options: ['Screening directors against sanctions and PEP lists', 'Checking the vendor\'s office decor', 'Reviewing the vendor\'s social media followers', 'Asking for the vendor\'s favorite color'], correctAnswer: 0, explanation: 'KYV involves screening the organization and persons acting on its behalf.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q8-13', question: 'If a vendor provides IT services with access to infrastructure, what additional check is recommended?', options: ['A credit check', 'A cybersecurity check', 'A physical health check', 'A driving record check'], correctAnswer: 1, explanation: 'IT vendors introduce specific security risks that require technical validation.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q8-14', question: 'What is "Conflict of Interest" in the context of vendor management?', options: ['When a vendor is too expensive', 'When an employee has a personal interest that could influence their relationship with a vendor', 'When two vendors sell the same product', 'When a vendor changes their name'], correctAnswer: 1, explanation: 'Conflicts of interest can lead to bribery and corruption risks.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q8-15', question: 'Which line of defense is responsible for conducting the initial KYE/KYV due diligence?', options: ['1st Line (Business/HR)', '2nd Line (Compliance)', '3rd Line (Audit)', 'The Regulator'], correctAnswer: 0, explanation: 'The 1st line is responsible for executing due diligence at onboarding.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q8-16', question: 'What is "Adverse Media"?', options: ['A bad TV show', 'Negative news or information about a person or entity', 'A type of computer virus', 'A marketing campaign'], correctAnswer: 1, explanation: 'Adverse media screening is a key part of due diligence.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q8-17', question: 'Which of the following is a "Sanctions List"?', options: ['OFAC SDN List', 'The New York Times Best Seller List', 'A grocery list', 'A list of bank employees'], correctAnswer: 0, explanation: 'The SDN list is a primary sanctions list managed by the US Treasury.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q8-18', question: 'What is "Batch Screening"?', options: ['Screening a single person', 'Screening the entire customer database at scheduled intervals', 'Screening only cash transactions', 'Screening only new customers'], correctAnswer: 1, explanation: 'Batch screening ensures ongoing compliance for the existing customer base.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q8-19', question: 'What is the purpose of "Independent Audit" in an AML program?', options: ['To file SARs', 'To provide an unbiased assessment of the program\'s effectiveness', 'To train employees', 'To manage the compliance department'], correctAnswer: 1, explanation: 'Audit is the 3rd line of defense.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q8-20', question: 'Which of the following is a "Red Flag" for internal fraud?', options: ['An employee taking their vacation', 'An employee who never takes vacation and is overly protective of their work', 'An employee who works from home', 'An employee who uses a laptop'], correctAnswer: 1, explanation: 'Avoiding vacation can be a sign of hiding illicit activity.', category: 'Compliance', difficulty: 'medium' }
    ]
  },
  {
    id: 'q9',
    title: 'Quiz: Chapter 9 - Transaction Monitoring and Investigation',
    questions: [
      { id: 'q9-1', question: 'What was the primary technical failure in the NatWest (Fowler Oldfield) case study?', options: ['The bank had no TM system', 'The system mislabeled cash deposits as check deposits', 'The bank forgot to onboard the customer', 'The customer used a VPN'], correctAnswer: 1, explanation: 'NatWest\'s system mislabeled cash as checks, bypassing stringent cash-specific monitoring rules.', category: 'Case Studies', difficulty: 'medium' },
      { id: 'q9-2', question: 'Which process involves testing transactions that *fall below* the threshold to find false negatives?', options: ['ATL (Above-The-Line) Testing', 'BTL (Below-The-Line) Testing', 'KYC Refresh', 'Sanctions Screening'], correctAnswer: 1, explanation: 'BTL testing looks at transactions that the system *didn\'t* flag to ensure the threshold is appropriate.', category: 'Technology', difficulty: 'hard' },
      { id: 'q9-3', question: 'At which level of alert review does an analyst typically perform open-source research and source/destination analysis?', options: ['Level 1', 'Level 2', 'Level 3', 'Level 4'], correctAnswer: 1, explanation: 'Level 2 is the investigation stage where detailed analysis and research occur.', category: 'Investigations', difficulty: 'medium' },
      { id: 'q9-4', question: 'What is the primary difference between TM and Payment Screening?', options: ['TM is for cash, Screening is for wires', 'TM is post-onboarding, Screening is pre-completion', 'TM is manual, Screening is automated', 'There is no difference'], correctAnswer: 1, explanation: 'TM is continuous observation after onboarding; Payment Screening identifies high-risk parties before a transaction completes.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q9-5', question: 'Which technology helps uncover hidden links between customers using common data like email domains or phone numbers?', options: ['Excel', 'Network Analysis', 'Word Processing', 'Calculator'], correctAnswer: 1, explanation: 'Network analysis tools automatically identify connections within a customer\'s network.', category: 'Technology', difficulty: 'easy' },
      { id: 'q9-6', question: 'What was the primary failure in the NatWest (Fowler Oldfield) case?', options: ['The bank had no AML officer', 'The system mislabeled cash as checks, bypassing cash-specific rules', 'The customer was a PEP', 'The bank failed to file any CTRs'], correctAnswer: 1, explanation: 'Mislabeling cash as checks prevented the system from applying more stringent cash-specific monitoring rules.', category: 'Case Studies', difficulty: 'medium' },
      { id: 'q9-7', question: 'In the NatWest case, what was the "Security Blanket" rule?', options: ['A rule for employee safety', 'A monitoring rule that failed due to transaction mislabeling', 'A type of insurance', 'A regulatory requirement'], correctAnswer: 1, explanation: 'The "Security Blanket" monitoring rule failed to detect suspicious activity because cash was mislabeled as checks.', category: 'Case Studies', difficulty: 'hard' },
      { id: 'q9-8', question: 'What is "Intelligent Contextual Analysis" in TM?', options: ['Checking if a transaction exceeds a threshold and meets additional criteria like peer deviation', 'Reading the news', 'A type of manual review', 'A regulatory report'], correctAnswer: 0, explanation: 'It operates on a binary rule to check thresholds and additional context like history and peers.', category: 'Technology', difficulty: 'medium' },
      { id: 'q9-9', question: 'What is the risk of "Tipping Off" in some jurisdictions?', options: ['It is a minor fine', 'It is a felony that can result in criminal charges', 'It is encouraged by regulators', 'It is only a civil matter'], correctAnswer: 1, explanation: 'Tipping off is a serious offense and can be a felony in many jurisdictions.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q9-10', question: 'Why should organizations avoid turning off monitoring alerts to manage backlogs?', options: ['It is too expensive', 'It can lead to missed suspicious activity and regulatory action (as seen in the NatWest case)', 'It makes the system slower', 'It is required by law'], correctAnswer: 1, explanation: 'Turning off alerts to manage volume is a major control failure.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q9-11', question: 'What is "Intelligent Contextual Analysis"?', options: ['Checking only the transaction amount', 'Checking transactions against thresholds AND historical behavior/peer groups', 'Monitoring the news', 'A type of manual review'], correctAnswer: 1, explanation: 'Contextual analysis adds depth to simple threshold-based rules.', category: 'Technology', difficulty: 'hard' },
      { id: 'q9-12', question: 'Which of the following is a "Level 1" alert review action?', options: ['Filing a SAR', 'Dismissing an alert as a false positive with rationale', 'Conducting a dawn raid', 'Interviewing the customer'], correctAnswer: 1, explanation: 'Level 1 is the initial triage where obvious false positives are cleared.', category: 'Investigations', difficulty: 'easy' },
      { id: 'q9-13', question: 'What is a "Round Trip" transaction scenario?', options: ['A customer traveling abroad', 'A sent remittance returned as a received remittance shortly after', 'A customer opening two accounts', 'A bank merger'], correctAnswer: 1, explanation: 'Round tripping is a red flag for layering or tax evasion.', category: 'Red Flags', difficulty: 'medium' },
      { id: 'q9-14', question: 'Which US regulation allows financial institutions to share information about potential money laundering?', options: ['Section 311', 'Section 314(b)', 'Section 312', 'Section 326'], correctAnswer: 1, explanation: 'Section 314(b) of the USA PATRIOT Act facilitates voluntary info sharing between FIs.', category: 'Regulations', difficulty: 'medium' },
      { id: 'q9-15', question: 'What is the primary risk of "Tipping Off" in a criminal sense?', options: ['Reputational damage only', 'It is a felony that can result in criminal charges against the employee', 'A small fine', 'No risk if the customer is innocent'], correctAnswer: 1, explanation: 'Tipping off can severely obstruct justice and is a serious crime.', category: 'Investigations', difficulty: 'hard' },
      { id: 'q9-16', question: 'What is "Network Analysis" used for?', options: ['To fix the internet', 'To identify hidden links and patterns within a customer\'s network', 'To track employee emails', 'To calculate interest rates'], correctAnswer: 1, explanation: 'Network analysis visualizes relationships between entities.', category: 'Technology', difficulty: 'medium' },
      { id: 'q9-17', question: 'Which of the following is a "Manual" alert source?', options: ['A system rule', 'A front-office report of a suspicious cash deposit', 'An AI model', 'A batch screening result'], correctAnswer: 1, explanation: 'Staff can raise alerts manually based on their observations.', category: 'Investigations', difficulty: 'easy' },
      { id: 'q9-18', question: 'What is "Threshold Setting"?', options: ['Buying a new door', 'Defining the minimum level of activity required to trigger an alert', 'Setting the bank\'s closing time', 'Calculating the CEO\'s salary'], correctAnswer: 1, explanation: 'Thresholds are a core part of TM system configuration.', category: 'Technology', difficulty: 'medium' },
      { id: 'q9-19', question: 'What is "Frequency" in the context of TM tuning?', options: ['How often the bank opens', 'How often tuning exercises should occur', 'The speed of the internet', 'The number of customers'], correctAnswer: 1, explanation: 'Tuning should be performed at regular intervals or triggered by events.', category: 'Technology', difficulty: 'medium' },
      { id: 'q9-20', question: 'Which of the following is a "Level 3" review action?', options: ['Initial triage', 'Complex risk assessment and cross-department collaboration', 'Dismissing a false positive', 'Checking a customer\'s ID'], correctAnswer: 1, explanation: 'Level 3 handles the most complex and sensitive cases.', category: 'Investigations', difficulty: 'hard' }
    ]
  },
  {
    id: 'q10',
    title: 'Quiz: Chapter 10 - Concluding Investigations & LEA Coordination',
    questions: [
      { id: 'q10-1', question: 'Why was Deutsche Bank fined €170,000 by BaFin in 2023?', options: ['For having too many customers', 'For failing to submit STRs on time', 'For using the wrong currency', 'For hiring too many employees'], correctAnswer: 1, explanation: 'BaFin fined the bank for delays in filing suspicious transaction reports.', category: 'Case Studies', difficulty: 'medium' },
      { id: 'q10-2', question: 'Which legal principle protects investigations conducted by *external* legal counsel?', options: ['The Tipping Off rule', 'Attorney-Client Privilege', 'Safe Harbor', 'The 5th Pillar'], correctAnswer: 1, explanation: 'External legal counsel investigations are generally protected by privilege.', category: 'Investigations', difficulty: 'medium' },
      { id: 'q10-3', question: 'What is "Willful Blindness"?', options: ['Needing glasses', 'The deliberate avoidance of knowledge of facts', 'Accidentally missing a red flag', 'Reporting too many SARs'], correctAnswer: 1, explanation: 'Willful blindness is legally equivalent to actual knowledge of a crime.', category: 'Compliance', difficulty: 'hard' },
      { id: 'q10-4', question: 'What is the most important part of a SAR?', options: ['The customer\'s name', 'The narrative (Who, What, Where, When, Why, How)', 'The filing date', 'The bank\'s address'], correctAnswer: 1, explanation: 'The narrative provides the context and rationale for the suspicion to law enforcement.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q10-5', question: 'What is an "Impact Statement" in a SAR?', options: ['A list of bank fees', 'An introductory sentence designed to compel LEA action', 'A summary of the bank\'s profit', 'A customer complaint'], correctAnswer: 1, explanation: 'The impact statement highlights the urgency and importance of the report.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q10-6', question: 'What are "Defensive SARs"?', options: ['SARs filed to protect the customer', 'SARs filed "just in case" to avoid regulatory scrutiny', 'SARs filed by the military', 'SARs that are very short'], correctAnswer: 1, explanation: 'Defensive SARs burden LEAs and are a sign of a weak compliance program.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q10-7', question: 'According to FATF, what is "De-risking"?', options: ['Lowering interest rates', 'Terminating entire client categories to avoid risk instead of managing it', 'Buying insurance', 'Hiring more compliance officers'], correctAnswer: 1, explanation: 'De-risking involves broad exclusions of sectors (like MSBs or NPOs).', category: 'Compliance', difficulty: 'medium' },
      { id: 'q10-8', question: 'How many adults globally lack access to a formal bank account (Financial Inclusion)?', options: ['100 million', '500 million', '1.4 billion', '3 billion'], correctAnswer: 2, explanation: 'The World Bank reported 1.4 billion unbanked adults in 2021.', category: 'Fundamentals', difficulty: 'easy' },
      { id: 'q10-9', question: 'Which document compels a financial institution to produce specific records for a case?', options: ['A SAR', 'A Subpoena', 'A KYC form', 'A deposit slip'], correctAnswer: 1, explanation: 'A subpoena is a legal mandate to provide information.', category: 'Investigations', difficulty: 'easy' },
      { id: 'q10-10', question: 'Strict documentation requirements can reduce account ownership by what percentage in Sub-Saharan Africa?', options: ['5%', '10%', '23%', '50%'], correctAnswer: 2, explanation: 'FATF noted that strict documentation could reduce account ownership by up to 23% in Sub-Saharan Africa.', category: 'Fundamentals', difficulty: 'hard' },
      { id: 'q10-11', question: 'What is a "Dawn Raid"?', options: ['A morning exercise', 'An unannounced inspection by law enforcement or regulators', 'A type of bank robbery', 'A marketing campaign'], correctAnswer: 1, explanation: 'Dawn raids test an organization\'s response protocols and readiness.', category: 'Investigations', difficulty: 'medium' },
      { id: 'q10-12', question: 'Which of the following is a reason a bank might decide *not* to file a SAR?', options: ['The customer is a friend of the CEO', 'Insufficient evidence to support a suspicious activity claim', 'The compliance officer is too busy', 'The customer has a lot of money'], correctAnswer: 1, explanation: 'Decisions not to file must be based on facts and documented rationale.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q10-13', question: 'What is "Financial Exclusion" (De-banking)?', options: ['Closing a bank branch', 'The broader loss of financial services due to risk appetite or regulatory constraints', 'A type of bank fee', 'A customer moving to another bank'], correctAnswer: 1, explanation: 'De-banking is a consequence of de-risking.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q10-14', question: 'What is the primary goal of the "Vienna Convention" (1988)?', options: ['To regulate trade', 'To define money laundering offenses related to drug trafficking', 'To protect the environment', 'To set tax rates'], correctAnswer: 1, explanation: 'The Vienna Convention was the first to define ML offenses globally.', category: 'Standards', difficulty: 'medium' },
      { id: 'q10-15', question: 'In the US, how many calendar days does FinCEN typically allow for filing a SAR after detection?', options: ['10 days', '30 days', '60 days', '90 days'], correctAnswer: 1, explanation: 'The standard deadline is 30 days, with a possible 30-day extension if no suspect is identified.', category: 'Regulations', difficulty: 'easy' },
      { id: 'q10-16', question: 'What is "Attorney-Client Privilege" in an investigation?', options: ['A special bank account', 'Legal protection for communications between an organization and its external counsel', 'A type of SAR', 'A regulatory fine'], correctAnswer: 1, explanation: 'Privilege is crucial for protecting the organization\'s legal strategy.', category: 'Investigations', difficulty: 'medium' },
      { id: 'q10-17', question: 'Which of the following is a "Post-SAR" action?', options: ['Telling the customer about the SAR', 'Updating the customer\'s risk rating and considering enhanced monitoring', 'Deleting the customer\'s file', 'Ignoring the customer'], correctAnswer: 1, explanation: 'Filing a SAR is often the start of a more intensive monitoring phase.', category: 'Compliance', difficulty: 'medium' },
      { id: 'q10-18', question: 'What is a "Search Warrant"?', options: ['A request for a meeting', 'A court-issued permission allowing LEA to search premises and seize documents', 'A type of bank statement', 'A marketing flyer'], correctAnswer: 1, explanation: 'Warrants are more intrusive than subpoenas and require immediate compliance.', category: 'Investigations', difficulty: 'medium' },
      { id: 'q10-19', question: 'What is "Financial Inclusion"?', options: ['Including everyone in a meeting', 'Ensuring that individuals and businesses have access to useful and affordable financial services', 'A type of bank merger', 'A regulatory requirement'], correctAnswer: 1, explanation: 'Financial inclusion is a key goal for sustainable development.', category: 'Fundamentals', difficulty: 'easy' },
      { id: 'q10-20', question: 'What is the "Wolfsberg Group"?', options: ['A group of wolves', 'An association of global banks that develops financial crime risk management frameworks', 'A regulatory body', 'A law enforcement agency'], correctAnswer: 1, explanation: 'The Wolfsberg Group is a key industry body for AML/CFT standards.', category: 'Standards', difficulty: 'medium' }
    ]
  },
  {
    id: 'q11',
    title: 'Quiz: Chapter 11 - Tools and Technologies',
    questions: [
      { id: 'q11-1', question: 'Which technology is best suited for automating high-volume, repetitive tasks like data entry?', options: ['AI', 'Machine Learning', 'RPA (Robotic Process Automation)', 'Graph Databases'], correctAnswer: 2, explanation: 'RPA is designed for repetitive, rule-based tasks.', category: 'Technology', difficulty: 'easy' },
      { id: 'q11-2', question: 'What is the primary benefit of using AI in transaction monitoring?', options: ['It replaces all human analysts', 'It reduces false positives and identifies complex, non-linear patterns', 'It makes the system more expensive', 'It only works for cash transactions'], correctAnswer: 1, explanation: 'AI helps refine detection and reduce the burden of false alerts.', category: 'Technology', difficulty: 'medium' },
      { id: 'q11-3', question: 'Which tool is used to analyze unstructured data like news articles and SAR narratives?', options: ['NLP (Natural Language Processing)', 'Blockchain Analytics', 'Excel', 'Calculator'], correctAnswer: 0, explanation: 'NLP helps machines understand and process human language.', category: 'Technology', difficulty: 'medium' },
      { id: 'q11-4', question: 'What is "Link Analysis" primarily performed with?', options: ['Spreadsheets', 'Graph Databases', 'Word Documents', 'Physical files'], correctAnswer: 1, explanation: 'Graph databases are optimized for relationship-heavy data.', category: 'Technology', difficulty: 'medium' },
      { id: 'q11-5', question: 'Why must AI solutions be tested with diverse data sets?', options: ['To make them faster', 'To eliminate bias and ensure fairness', 'To reduce the cost of the software', 'To comply with tax laws'], correctAnswer: 1, explanation: 'Bias in data can lead to discriminatory or inaccurate outcomes in AI models.', category: 'Technology', difficulty: 'medium' },
      { id: 'q11-6', question: 'What is the role of "Biometrics" in customer onboarding?', options: ['To track customer health', 'To verify identity using unique physical characteristics like fingerprints or facial recognition', 'To calculate risk scores', 'To monitor transactions'], correctAnswer: 1, explanation: 'Biometrics provide a high level of assurance in identity verification.', category: 'Technology', difficulty: 'easy' },
      { id: 'q11-7', question: 'Which regulation is most commonly associated with "Data Privacy" in the EU?', options: ['FATF 40', 'USA PATRIOT Act', 'GDPR', 'MiFID II'], correctAnswer: 2, explanation: 'GDPR is the primary data protection regulation in the European Union.', category: 'Compliance', difficulty: 'easy' },
      { id: 'q11-8', question: 'What is "Intelligent Contextual Analysis"?', options: ['Checking only the transaction amount', 'Checking transactions against thresholds AND historical behavior/peer groups', 'Monitoring the news', 'A type of manual review'], correctAnswer: 1, explanation: 'Contextual analysis adds depth to simple threshold-based rules.', category: 'Technology', difficulty: 'hard' },
      { id: 'q11-9', question: 'What is the first step in preparing data for an AFC technology solution?', options: ['Filing a SAR', 'Data cleaning and organization', 'Hiring a new manager', 'Buying more servers'], correctAnswer: 1, explanation: 'High-quality, clean data is essential for effective technology performance.', category: 'Technology', difficulty: 'medium' },
      { id: 'q11-10', question: 'Which technology is essential for tracking the flow of funds in cryptocurrencies?', options: ['Traditional bank statements', 'Blockchain analytics tools', 'Physical ledgers', 'Email logs'], correctAnswer: 1, explanation: 'Blockchain analytics are needed to trace transactions on public ledgers.', category: 'Technology', difficulty: 'easy' },
      { id: 'q11-11', question: 'What is "Machine Learning" (ML) in the context of AFC?', options: ['A type of exercise', 'Algorithms that improve automatically through experience and data', 'A manual data entry process', 'A type of bank vault'], correctAnswer: 1, explanation: 'ML allows systems to adapt to new patterns without explicit programming.', category: 'Technology', difficulty: 'medium' },
      { id: 'q11-12', question: 'Which of the following is a risk of implementing AI solutions?', options: ['They are too cheap', 'They can introduce bias if not tested with diverse data', 'They don\'t use data', 'They only work on weekends'], correctAnswer: 1, explanation: 'Algorithmic bias is a significant risk in AI implementation.', category: 'Technology', difficulty: 'medium' },
      { id: 'q11-13', question: 'What is "Explainability" in AI?', options: ['The ability to talk to the AI', 'The ability to understand and describe how an AI model reached a specific decision', 'The AI explaining the news', 'A type of marketing'], correctAnswer: 1, explanation: 'Regulators require AI decisions to be transparent and explainable.', category: 'Technology', difficulty: 'hard' },
      { id: 'q11-14', question: 'Which tool is best for visualizing complex networks of transactions?', options: ['Graph Databases', 'Calculators', 'Physical maps', 'Notepad'], correctAnswer: 0, explanation: 'Graph databases excel at representing and querying relationships.', category: 'Technology', difficulty: 'medium' },
      { id: 'q11-15', question: 'What is "Digital Identity"?', options: ['A person\'s social media handle', 'An electronic representation of an individual or entity used for remote verification', 'A type of computer virus', 'A bank\'s website'], correctAnswer: 1, explanation: 'Digital ID solutions are crucial for remote onboarding and financial inclusion.', category: 'Technology', difficulty: 'easy' },
      { id: 'q11-16', question: 'What is "Graph Analysis"?', options: ['Drawing a chart', 'Analyzing relationships between entities in a graph database', 'A type of math test', 'A regulatory requirement'], correctAnswer: 1, explanation: 'Graph analysis is powerful for identifying complex laundering networks.', category: 'Technology', difficulty: 'medium' },
      { id: 'q11-17', question: 'Which of the following is a "Biometric" identifier?', options: ['A password', 'A fingerprint', 'A credit card number', 'An email address'], correctAnswer: 1, explanation: 'Biometrics use unique physical or behavioral characteristics.', category: 'Technology', difficulty: 'easy' },
      { id: 'q11-18', question: 'What is "Data Cleaning"?', options: ['Washing a computer', 'The process of identifying and correcting errors in a dataset', 'Deleting all data', 'A type of bank audit'], correctAnswer: 1, explanation: 'Clean data is essential for accurate technology performance.', category: 'Technology', difficulty: 'medium' },
      { id: 'q11-19', question: 'What is "Algorithmic Bias"?', options: ['A fast computer', 'Systematic errors in a computer system that create unfair outcomes', 'A type of bank fee', 'A regulatory requirement'], correctAnswer: 1, explanation: 'Bias can lead to discriminatory results in AI models.', category: 'Technology', difficulty: 'medium' },
      { id: 'q11-20', question: 'What is "Cloud Computing" in AFC?', options: ['Weather forecasting', 'The on-demand availability of computer system resources, especially data storage and computing power', 'A type of bank vault', 'A regulatory fine'], correctAnswer: 1, explanation: 'Cloud solutions offer scalability for complex AFC processing.', category: 'Technology', difficulty: 'easy' }
    ]
  }
];

// Fill with more questions to reach 20 each for practice
quizSets.forEach(set => {
  const chapterId = set.id;
  const count = set.questions.length;
  
  const practiceQuestions: Partial<QuizQuestion>[] = [
    {
      question: "Which FATF Recommendation specifically addresses the 'Risk-Based Approach'?",
      options: ["Recommendation 1", "Recommendation 10", "Recommendation 15", "Recommendation 20"],
      correctAnswer: 0,
      explanation: "Recommendation 1 requires countries to identify, assess, and understand their money laundering and terrorist financing risks and take action.",
      category: 'Standards'
    },
    {
      question: "In the context of crypto-assets, what is the 'Travel Rule'?",
      options: [
        "A rule requiring travelers to declare crypto holdings",
        "A requirement for VASPs to share originator and beneficiary information",
        "A ban on using crypto while traveling",
        "A tax on cross-border crypto transfers"
      ],
      correctAnswer: 1,
      explanation: "The Travel Rule (FATF Recommendation 15) requires VASPs to transmit required originator and beneficiary information.",
      category: 'Technology'
    },
    {
      question: "What is the primary goal of the Egmont Group?",
      options: [
        "To set global tax standards",
        "To provide a platform for FIUs to exchange information",
        "To regulate the insurance industry",
        "To manage the UN sanctions list"
      ],
      correctAnswer: 1,
      explanation: "The Egmont Group is a global network of Financial Intelligence Units (FIUs) that facilitates information exchange.",
      category: 'Standards'
    },
    {
      question: "Which EU directive introduced the concept of 'AMLA' (Anti-Money Laundering Authority)?",
      options: ["4AMLD", "5AMLD", "6AMLD", "2024 AML Package"],
      correctAnswer: 3,
      explanation: "The 2024 EU AML Package established AMLA as a central authority for AML supervision.",
      category: 'Regulations'
    },
    {
      question: "What does Section 311 of the USA PATRIOT Act allow the US Treasury to do?",
      options: [
        "Share information with foreign banks",
        "Designate a foreign jurisdiction or institution as a 'primary money laundering concern'",
        "Arrest foreign nationals for ML",
        "Seize assets without a warrant"
      ],
      correctAnswer: 1,
      explanation: "Section 311 allows for special measures against jurisdictions or institutions of primary money laundering concern.",
      category: 'Regulations'
    }
  ];

  for (let i = count + 1; i <= 40; i++) {
    const practiceIdx = (i - count - 1) % practiceQuestions.length;
    const template = practiceQuestions[practiceIdx];
    
    set.questions.push({
      id: `${chapterId}-${i}`,
      question: template.question || `Practice Question ${i}`,
      options: template.options || ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: template.correctAnswer ?? 0,
      explanation: template.explanation || 'Practice makes perfect.',
      category: template.category || 'Practice',
      difficulty: i % 3 === 0 ? 'easy' : i % 3 === 1 ? 'medium' : 'hard'
    });
  }
});

export const glossary = [
  { term: 'Factoring', definition: 'The sale of accounts receivable to a third party at a discount.' },
  { term: 'Forfaiting', definition: 'A form of trade finance where an exporter sells their medium-to-long-term receivables to a forfaiter.' },
  { term: 'Letter of Credit', definition: 'A letter from a bank guaranteeing that a buyer\'s payment to a seller will be received on time and for the correct amount.' },
  { term: 'Bearer Instrument', definition: 'A document that entitles the holder to the value stated, often used to move funds anonymously.' },
  { term: 'AUM', definition: 'Assets Under Management: The total market value of assets managed by a financial institution on behalf of clients.' },
  { term: 'SWF', definition: 'Sovereign Wealth Fund: A state-owned investment fund used to manage national reserves.' },
  { term: 'SPV', definition: 'Special Purpose Vehicle: A legal entity created for a specific, limited purpose, often used to isolate financial risk.' },
  { term: 'PIV', definition: 'Pooled Investment Vehicle: A fund where multiple investors pool their money to be managed by a professional.' },
  { term: 'Front-running', definition: 'The illegal practice of a broker executing orders on a security for their own account while taking advantage of advance knowledge of pending orders from its customers.' },
  { term: 'Churning', definition: 'The practice of a broker executing excessive trades in a client\'s account to generate commissions.' },
  { term: 'Spoofing', definition: 'A form of market manipulation where a trader places fake orders to create a false impression of supply or demand.' },
  { term: 'ACH', definition: 'Automated Clearing House: An electronic network for financial transactions in the United States.' },
  { term: 'IPO', definition: 'Initial Public Offering: The process of offering shares of a private corporation to the public in a new stock issuance.' },
  { term: 'Nesting', definition: 'When a respondent bank allows other financial institutions to use its correspondent account.' },
  { term: 'Round Tripping', definition: 'A technique where funds are sent offshore and then returned to the home country to appear as legitimate foreign investment.' },
  { term: 'PSP', definition: 'Payment Service Provider: An entity that facilitates electronic payments for merchants.' },
  { term: 'Structuring', definition: 'Breaking down large cash deposits into smaller amounts to avoid reporting thresholds.' },
  { term: 'Microstructuring', definition: 'Making even smaller incremental deposits, often under $1,000, spread across many accounts to evade detection.' },
  { term: 'Smurfing', definition: 'A form of structuring where multiple individuals (smurfs) make small deposits into different accounts.' },
  { term: 'Money Muling', definition: 'Recruiting individuals to transfer illicit funds between accounts on behalf of criminals.' },
  { term: 'TBML', definition: 'Trade-Based Money Laundering: Using trade transactions to obscure the source of funds (e.g., over/under-invoicing).' },
  { term: 'MBML', definition: 'Market-Based Money Laundering: Exploiting financial instruments like stocks and bonds to layer illicit funds.' },
  { term: 'ABC', definition: 'Anti-Bribery and Corruption: Policies and controls designed to prevent bribery and corrupt practices.' },
  { term: 'Fraud Triangle', definition: 'A model explaining the three factors that lead to fraud: Pressure, Opportunity, and Rationalization.' },
  { term: 'UBO', definition: 'Ultimate Beneficial Owner: The natural person(s) who ultimately owns or controls a customer.' },
  { term: 'BO', definition: 'Beneficial Owner: An individual or entity that possesses ownership of a legal entity.' },
  { term: 'Regulated Entity', definition: 'A business under direct supervision of financial regulators (e.g., banks).' },
  { term: 'Obliged Entity', definition: 'A broader category including non-financial organizations subject to AML/CFT laws (e.g., real estate, energy).' },
  { term: 'Deepfake', definition: 'AI-generated synthetic media used to impersonate individuals during remote onboarding.' },
  { term: 'Synthetic Identity', definition: 'A fake identity created by combining real and fabricated information.' },
  { term: 'BMPE', definition: 'Black Market Peso Exchange: A method used by drug traffickers to convert illicit funds.' },
  { term: 'Hawala', definition: 'An informal value transfer system based on trust and a network of brokers.' },
  { term: 'VASP', definition: 'Virtual Asset Service Provider: Entities that facilitate virtual asset transactions.' },
  { term: 'ARS', definition: 'Alternative Remittance System: Informal networks used to move value without physical cash movement.' },
  { term: 'Willful Blindness', definition: 'Deliberately ignoring suspicious activity to avoid legal responsibility.' },
  { term: 'Nostro Account', definition: 'An account held by a bank in a foreign currency at another bank.' },
  { term: 'Vostro Account', definition: 'A foreign bank\'s account held by a domestic bank in domestic currency.' },
  { term: 'Predicate Crime', definition: 'The underlying illegal activity that generates illicit funds (e.g., drug trafficking).' },
  { term: 'Placement', definition: 'The first stage of money laundering: introducing illicit funds into the financial system.' },
  { term: 'Layering', definition: 'The second stage: moving funds through complex transactions to hide their source.' },
  { term: 'Integration', definition: 'The final stage: returning "clean" funds to the legitimate economy.' },
  { term: 'ILI', definition: 'Investment-Linked Insurance: Policies that combine insurance protection with investment potential.' },
  { term: 'ETF', definition: 'Exchange-Traded Fund: An investment fund traded on stock exchanges, similar to individual stocks.' },
  { term: 'Hedge Fund', definition: 'A pooled investment fund that employs various strategies to generate returns, often with opaque structures.' },
  { term: 'Private Equity', definition: 'Investing directly in private companies or buying out public companies.' },
  { term: 'Custodian Bank', definition: 'A financial institution that safeguards customers\' assets like stocks and bonds.' },
  { term: 'DLT', definition: 'Distributed Ledger Technology: A digital system for recording transactions in multiple places at once (e.g., Blockchain).' },
  { term: 'DeFi', definition: 'Decentralized Finance: Financial services operating on smart contracts without traditional intermediaries.' },
  { term: 'Stablecoin', definition: 'A digital currency pegged to a stable asset like fiat currency to reduce volatility.' },
  { term: 'NFT', definition: 'Non-Fungible Token: A unique digital asset representing ownership of digital art or collectibles.' },
  { term: 'CBDC', definition: 'Central Bank Digital Currency: A digital version of fiat currency issued and regulated by a central bank.' },
  { term: 'Mixer/Tumbler', definition: 'A service used to hide the source of cryptoasset funds by mixing them with other users\' funds.' },
  { term: 'TCSP', definition: 'Trust and Company Service Provider: Entities that provide services such as company formation, nominee services, and trust management.' },
  { term: 'Nominee Service', definition: 'The practice of providing a third party to act as a director or shareholder to hide the true owner.' },
  { term: 'Shelf Company', definition: 'A pre-registered company with no active business activity, often used to bypass formation delays or hide ownership.' },
  { term: 'Offshore Company', definition: 'A company incorporated in a jurisdiction other than where its main operations or owners are located, often for tax or secrecy benefits.' },
  { term: 'Straw Buyer', definition: 'A person who makes a purchase on behalf of another person, often to hide the identity of the true buyer in real estate or high-value asset transactions.' },
  { term: 'FTZ', definition: 'Free-Trade Zone: A designated area where goods can be handled without customs duties.' },
  { term: 'Hawala', definition: 'An informal value transfer system based on trust, operating outside traditional banking.' },
  { term: 'NGO', definition: 'Nongovernmental Organization: A nonprofit group that functions independently of any government.' },
  { term: 'Dual-Use Goods', definition: 'Products that can be used for both civilian and military purposes.' },
  { term: 'Under-invoicing', definition: 'Invoicing goods at a price below fair market value to transfer value.' },
  { term: 'Over-invoicing', definition: 'Invoicing goods at a price above fair market value to receive excess funds.' },
  { term: 'Ghost-shipping', definition: 'Fictitious trade where no actual goods are shipped.' },
  { term: 'Palermo Convention', definition: 'A 2000 UN treaty addressing transnational organized crime, money laundering, and corruption.' },
  { term: 'Vienna Convention', definition: 'The 1988 UN Convention against Illicit Traffic in Narcotic Drugs and Psychotropic Substances, which first defined money laundering offenses.' },
  { term: 'MER', definition: 'Mutual Evaluation Report: An in-depth assessment of a jurisdiction\'s compliance with FATF standards.' },
  { term: 'Technical Compliance', definition: 'The extent to which a jurisdiction has implemented the specific requirements of the FATF Recommendations in its legal and regulatory framework.' },
  { term: 'Effectiveness', definition: 'The extent to which a jurisdiction\'s AML/CFT framework achieves the 11 Immediate Outcomes defined by FATF.' },
  { term: 'Grey List', definition: 'FATF\'s list of jurisdictions under increased monitoring due to strategic deficiencies.' },
  { term: 'Black List', definition: 'FATF\'s list of high-risk jurisdictions subject to a call for action.' },
  { term: 'NRA', definition: 'National Risk Assessment: A process where a jurisdiction identifies and assesses its money laundering and terrorist financing risks.' },
  { term: 'Horizon Scanning', definition: 'The process of monitoring emerging trends and future threats to adapt risk management strategies.' },
  { term: 'UNODC', definition: 'United Nations Office on Drugs and Crime: Assists Member States in combating ML, TF, and organized crime.' },
  { term: 'GPML', definition: 'Global Programme Against Money Laundering: A UN initiative to assist Member States in developing robust AML programs.' },
  { term: 'CPI', definition: 'Corruption Perceptions Index: Transparency International\'s ranking of perceived public sector corruption.' },
  { term: 'BPI', definition: 'Bribe Payers Index: Transparency International\'s ranking of exporting countries by propensity to bribe.' },
  { term: 'ICAR', definition: 'International Centre for Asset Recovery: A specialized division of the Basel Institute on Governance.' },
  { term: 'Basel AML Index', definition: 'An independent ranking assessing a country\'s vulnerability to money laundering and terrorist financing.' },
  { term: 'Financial Secrecy Index', definition: 'Tax Justice Network\'s ranking of jurisdictions based on financial secrecy and scale of activities.' },
  { term: 'Corporate Tax Haven Index', definition: 'Tax Justice Network\'s ranking of jurisdictions that enable corporate tax abuse.' },
  { term: 'BSA', definition: 'Bank Secrecy Act: The primary US anti-money laundering regulation requiring recordkeeping and reporting.' },
  { term: 'CTR', definition: 'Currency Transaction Report: A report required for cash transactions exceeding $10,000.' },
  { term: 'FBAR', definition: 'Foreign Bank Account Report: Required for US persons with financial interest in foreign accounts exceeding $10,000.' },
  { term: 'CMIR', definition: 'Currency and Monetary Instrument Report: Required for physical transport of currency exceeding $10,000 into or out of the US.' },
  { term: 'CASA', definition: 'Current Account Savings Account: A type of bank account that combines the features of checking and savings accounts.' },
  { term: 'EEA', definition: 'European Economic Area: The area in which the free movement of persons, goods, services and capital within the European Single Market applies.' },
  { term: 'G7', definition: 'Group of Seven: An intergovernmental political forum consisting of Canada, France, Germany, Italy, Japan, the United Kingdom and the United States.' },
  { term: 'G20', definition: 'Group of Twenty: An international forum for the governments and central bank governors from 19 countries and the European Union.' },
  { term: 'IAIS', definition: 'International Association of Insurance Supervisors: The global standard-setting body for the insurance sector.' },
  { term: 'IFC', definition: 'International Finance Corporation: An international financial institution that offers investment, advisory, and asset-management services to encourage private-sector development in less developed countries.' },
  { term: 'IMF', definition: 'International Monetary Fund: An international organization that works to foster global monetary cooperation, secure financial stability, facilitate international trade, promote high employment and sustainable economic growth, and reduce poverty around the world.' },
  { term: 'MENAFATF', definition: 'Middle East and North Africa Financial Action Task Force: A FATF-style regional body for the MENA region.' },
  { term: 'NCCT', definition: 'Non-Cooperative Countries and Territories: A term formerly used by FATF to identify jurisdictions with strategic deficiencies in their AML/CFT regimes.' },
  { term: 'Wolfsberg Group', definition: 'An association of global banks which aims to develop frameworks and guidance for the management of financial crime risks.' },
  { term: 'World Bank', definition: 'An international organization that provides funding, advice, and other resources to developing nations, and works with the IMF to combat money laundering and terrorist financing.' },
  { term: 'KYE', definition: 'Know Your Employee; due diligence on employees to prevent internal fraud or collaboration.' },
  { term: 'KYV', definition: 'Know Your Vendor; due diligence on third-party vendors and their directors.' },
  { term: 'ATL', definition: 'Above-The-Line testing; testing transactions that should be flagged by the system.' },
  { term: 'BTL', definition: 'Below-The-Line testing; testing transactions below the threshold to identify false negatives.' },
  { term: 'QC', definition: 'Quality Control; focuses on the output (e.g., checking if a file has all data points).' },
  { term: 'QA', definition: 'Quality Assurance; focuses on the process (e.g., ensuring policies are properly executed).' },
  { term: 'COSMIC', definition: 'Singapore digital platform for FIs to share information on red-flagged customers.' },
  { term: 'EIO', definition: 'European Investigation Order; facilitates mutual legal assistance among EU member states.' },
  { term: 'MLAT', definition: 'Mutual Legal Assistance Treaty; legal basis for sharing evidence between jurisdictions.' },
  { term: 'Impact Statement', definition: 'A strong introductory sentence in a SAR designed to compel law enforcement action.' },
  { term: 'De-banking', definition: 'The broader loss of financial services due to risk appetite, commercial factors, or regulatory constraints.' },
  { term: 'Financial Inclusion', definition: 'Ensuring that individuals and businesses, particularly the disadvantaged, have access to useful and affordable financial services.' },
  { term: 'Dawn Raid', definition: 'An unannounced inspection by law enforcement or regulatory authorities.' },
  { term: 'Fowler Oldfield', definition: 'A gold business involved in a major AML failure at NatWest, leading to a £264.8 million fine.' },
  { term: 'Security Blanket', definition: 'A specific monitoring rule at NatWest that failed to detect suspicious activity due to transaction mislabeling.' },
  { term: 'DORA', definition: 'Digital Operational Resilience Act; an EU regulation aimed at strengthening cybersecurity in the financial sector.' },
  { term: 'ICT', definition: 'Information and Communication Technology; a key focus of operational resilience regulations.' },
  { term: 'BaFin', definition: 'Federal Financial Supervisory Authority of Germany.' }
];

export const acronyms = [
  { acronym: 'AUM', description: 'Assets Under Management.' },
  { acronym: 'SWF', description: 'Sovereign Wealth Fund.' },
  { acronym: 'SPV', description: 'Special Purpose Vehicle.' },
  { acronym: 'PIV', description: 'Pooled Investment Vehicle.' },
  { acronym: 'ACH', description: 'Automated Clearing House.' },
  { acronym: 'IPO', description: 'Initial Public Offering.' },
  { acronym: 'PSP', description: 'Payment Service Provider.' },
  { acronym: 'MSB', description: 'Money Services Business.' },
  { acronym: 'UBO', description: 'Ultimate Beneficial Owner.' },
  { acronym: 'BO', description: 'Beneficial Owner.' },
  { acronym: 'BMPE', description: 'Black Market Peso Exchange.' },
  { acronym: 'VASP', description: 'Virtual Asset Service Provider.' },
  { acronym: 'ARS', description: 'Alternative Remittance System.' },
  { acronym: 'TCO', description: 'Transnational Criminal Organization.' },
  { acronym: 'FATF', description: 'Financial Action Task Force - The global AML/CFT standard-setter.' },
  { acronym: 'TBML', description: 'Trade-Based Money Laundering.' },
  { acronym: 'MBML', description: 'Market-Based Money Laundering.' },
  { acronym: 'ABC', description: 'Anti-Bribery and Corruption.' },
  { acronym: 'BEC', description: 'Business Email Compromise - A type of cyber-enabled fraud.' },
  { acronym: 'CRS', description: 'Common Reporting Standard - For automatic exchange of financial account information.' },
  { acronym: 'OECD', description: 'Organization for Economic Cooperation and Development.' },
  { acronym: 'APG', description: 'Asia/Pacific Group on Money Laundering - A FATF-style regional body.' },
  { acronym: 'MONEYVAL', description: 'Committee of Experts on the Evaluation of AML Measures - European regional body.' },
  { acronym: 'OFAC', description: 'Office of Foreign Assets Control - US agency managing economic sanctions.' },
  { acronym: 'FinCEN', description: 'Financial Crimes Enforcement Network - The US Financial Intelligence Unit (FIU).' },
  { acronym: 'FIU', description: 'Financial Intelligence Unit - National agency for receiving and analyzing SARs.' },
  { acronym: 'CTF', description: 'Counter-Terrorist Financing - Measures to prevent the funding of terrorism.' },
  { acronym: 'CDD', description: 'Customer Due Diligence - The process of identifying and verifying customers.' },
  { acronym: 'EDD', description: 'Enhanced Due Diligence - Additional measures for high-risk customers.' },
  { acronym: 'ILI', description: 'Investment-Linked Insurance.' },
  { acronym: 'ETF', description: 'Exchange-Traded Fund.' },
  { acronym: 'DLT', description: 'Distributed Ledger Technology.' },
  { acronym: 'DeFi', description: 'Decentralized Finance.' },
  { acronym: 'NFT', description: 'Non-Fungible Token.' },
  { acronym: 'CBDC', description: 'Central Bank Digital Currency.' },
  { acronym: 'VASP', description: 'Virtual Asset Service Provider.' },
  { acronym: 'TCSP', description: 'Trust and Company Service Provider.' },
  { acronym: 'FTZ', description: 'Free-Trade Zone.' },
  { acronym: 'NGO', description: 'Nongovernmental Organization.' },
  { acronym: 'L/C', description: 'Letter of Credit.' },
  { acronym: 'MER', description: 'Mutual Evaluation Report.' },
  { acronym: 'IO', description: 'Immediate Outcome (FATF Effectiveness measure).' },
  { acronym: 'NRA', description: 'National Risk Assessment.' },
  { acronym: 'UNODC', description: 'United Nations Office on Drugs and Crime.' },
  { acronym: 'GPML', description: 'Global Programme Against Money Laundering.' },
  { acronym: 'UNSC', description: 'United Nations Security Council.' },
  { acronym: 'CPI', description: 'Corruption Perceptions Index.' },
  { acronym: 'BPI', description: 'Bribe Payers Index.' },
  { acronym: 'ICAR', description: 'International Centre for Asset Recovery.' },
  { acronym: 'BSA', description: 'Bank Secrecy Act.' },
  { acronym: 'CTR', description: 'Currency Transaction Report.' },
  { acronym: 'FBAR', description: 'Foreign Bank Account Report.' },
  { acronym: 'CMIR', description: 'Currency and Monetary Instrument Report.' },
  { acronym: 'BCBS', description: 'Basel Committee on Banking Supervision.' },
  { acronym: 'IOSCO', description: 'International Organization of Securities Commissions.' },
  { acronym: 'ACWG', description: 'G-20 Anti-Corruption Working Group.' },
  { acronym: 'StAR', description: 'Stolen Assets Recovery Initiative.' },
  { acronym: 'TJN', description: 'Tax Justice Network.' },
  { acronym: 'CASA', description: 'Current Account Savings Account.' },
  { acronym: 'EEA', description: 'European Economic Area.' },
  { acronym: 'IAIS', description: 'International Association of Insurance Supervisors.' },
  { acronym: 'IFC', description: 'International Finance Corporation.' },
  { acronym: 'IMF', description: 'International Monetary Fund.' },
  { acronym: 'MENAFATF', description: 'Middle East and North Africa Financial Action Task Force.' },
  { acronym: 'NCCT', description: 'Non-Cooperative Countries and Territories.' },
  { acronym: 'DORA', description: 'Digital Operational Resilience Act (EU).' },
  { acronym: 'ICT', description: 'Information and Communication Technology.' },
  { acronym: 'BaFin', description: 'Federal Financial Supervisory Authority (Germany).' },
  { acronym: 'SAR', description: 'Suspicious Activity Report.' },
  { acronym: 'STR', description: 'Suspicious Transaction Report.' },
  { acronym: 'KRI', description: 'Key Risk Indicator; measures risk exposure.' },
  { acronym: 'KPI', description: 'Key Performance Indicator; measures process effectiveness.' },
  { acronym: 'RAS', description: 'Risk Appetite Statement; defines risk limits approved by the Board.' },
  { acronym: 'SOW', description: 'Source of Wealth; how the customer acquired their total wealth.' },
  { acronym: 'SOF', description: 'Source of Funds; the origin of the funds for a specific transaction.' },
  { acronym: 'RPA', description: 'Robotic Process Automation.' },
  { acronym: 'NLP', description: 'Natural Language Processing.' },
  { acronym: 'PPP', description: 'Public-Private Partnership.' }
];

export const defaultFlashcards: Flashcard[] = [
  {
    id: 'df-1',
    front: 'What are the three stages of money laundering?',
    back: 'Placement, Layering, and Integration.',
    topicId: 'ch1',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-2',
    front: 'Define "Structuring".',
    back: 'Breaking down large cash deposits into smaller amounts to avoid reporting thresholds (e.g., $10,000 in the US).',
    topicId: 'ch1',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-3',
    front: 'What is a "Shell Company"?',
    back: 'A company that has no active business operations or significant assets, often used to obscure ownership and facilitate illicit flows.',
    topicId: 'ch1',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-4',
    front: 'What is the primary purpose of the FATF?',
    back: 'To set global standards and promote effective implementation of legal, regulatory, and operational measures for combating money laundering and terrorist financing.',
    topicId: 'ch2',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-5',
    front: 'What are the "Four Pillars" of an AML program?',
    back: '1. Internal Policies, Procedures, and Controls; 2. A Designated Compliance Officer; 3. Ongoing Employee Training; 4. An Independent Audit Function.',
    topicId: 'ch3',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-6',
    front: 'Define "Ultimate Beneficial Owner" (UBO).',
    back: 'The natural person(s) who ultimately owns or controls a customer and/or the natural person on whose behalf a transaction is being conducted.',
    topicId: 'ch3',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-7',
    front: 'What is "Tipping Off"?',
    back: 'The illegal act of informing a customer or third party that a SAR is being filed or that an AML investigation is underway.',
    topicId: 'ch4',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-8',
    front: 'What is "Mutual Legal Assistance" (MLA)?',
    back: 'The formal process by which countries cooperate in legal matters and share evidence for criminal investigations and prosecutions.',
    topicId: 'ch4',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-9',
    front: 'What is the formula for Residual Risk?',
    back: 'Residual Risk = Inherent Risk - Control Effectiveness.',
    topicId: 'ch5',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-10',
    front: 'What is "Willful Blindness"?',
    back: 'The deliberate avoidance of knowledge of facts; legally equivalent to actual knowledge of a crime.',
    topicId: 'ch10',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-11',
    front: 'Define "De-risking".',
    back: 'Terminating or restricting customer relationships for entire client categories to avoid risk rather than managing it.',
    topicId: 'ch10',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-12',
    front: 'What is "ATL Testing" in transaction monitoring?',
    back: 'Above-The-Line testing; testing transactions that *should* be flagged by the system to ensure it works.',
    topicId: 'ch9',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-13',
    front: 'What is "BTL Testing" in transaction monitoring?',
    back: 'Below-The-Line testing; testing transactions *below* the threshold to identify false negatives.',
    topicId: 'ch9',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-14',
    front: 'What is "KYE"?',
    back: 'Know Your Employee; due diligence on employees to prevent internal fraud or collaboration with criminals.',
    topicId: 'ch8',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-15',
    front: 'What is "KYV"?',
    back: 'Know Your Vendor; due diligence on third-party vendors to assess fraud, data privacy, and security risks.',
    topicId: 'ch8',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-16',
    front: 'What is "NLP" in AFC technology?',
    back: 'Natural Language Processing; used to analyze unstructured data like news articles and SAR narratives.',
    topicId: 'ch11',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-17',
    front: 'What is "RPA"?',
    back: 'Robotic Process Automation; automates high-volume, repetitive tasks like data entry.',
    topicId: 'ch11',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-18',
    front: 'What is the "Impact Statement" in a SAR?',
    back: 'The introductory sentence of the narrative designed to compel an action or response from law enforcement.',
    topicId: 'ch10',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-19',
    front: 'What was the "Security Blanket" rule in the NatWest case?',
    back: 'A monitoring rule that failed because cash deposits were mislabeled as checks, bypassing cash-specific alerts.',
    topicId: 'ch9',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-20',
    front: 'What is the "Impact Statement" in a SAR?',
    back: 'A strong introductory sentence designed to compel law enforcement action by highlighting the urgency and nature of the suspicion.',
    topicId: 'ch10',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-21',
    front: 'Define "De-banking".',
    back: 'The broader loss of financial services for entire categories of customers due to risk appetite or regulatory constraints.',
    topicId: 'ch10',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-22',
    front: 'What is "Intelligent Contextual Analysis"?',
    back: 'A monitoring approach that checks transactions against thresholds AND additional context like historical behavior and peer groups.',
    topicId: 'ch9',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  },
  {
    id: 'df-23',
    front: 'What is "DORA"?',
    back: 'Digital Operational Resilience Act; an EU regulation for strengthening cybersecurity and operational resilience in finance.',
    topicId: 'ch8',
    nextReview: Date.now(),
    interval: 0,
    easeFactor: 2.5,
    repetitions: 0
  }
];

export const sampleBooks = [
  {
    id: 'book-1',
    title: 'FATF 40 Recommendations',
    author: 'FATF',
    description: 'The international standards on combating money laundering and the financing of terrorism & proliferation.',
    coverUrl: 'https://picsum.photos/seed/fatf/400/600',
    fileURL: 'https://www.fatf-gafi.org/content/dam/fatf-gafi/recommendations/FATF%20Recommendations%202012.pdf.coredownload.inline.pdf',
    isFree: true,
    category: 'Standards'
  },
  {
    id: 'book-2',
    title: 'Basel Committee on Banking Supervision',
    author: 'BIS',
    description: 'Sound management of risks related to money laundering and financing of terrorism.',
    coverUrl: 'https://picsum.photos/seed/bis/400/600',
    fileURL: 'https://www.bis.org/bcbs/publ/d405.pdf',
    isFree: true,
    category: 'Banking'
  }
];

export const redFlags = [
  { sector: 'Banking', flag: 'Frequent cash deposits just below reporting thresholds (Structuring).' },
  { sector: 'Banking', flag: 'Sudden increase in transaction volume for a dormant account.' },
  { sector: 'Banking', flag: 'Increases in revenue beyond initial KYC projections.' },
  { sector: 'Banking', flag: 'Transactions originating from high-risk jurisdictions without clear purpose.' },
  { sector: 'Insurance', flag: 'Purchase of high-value policies followed by immediate cancellation.' },
  { sector: 'Gaming', flag: 'Customer buys chips with cash and cashes out without playing.' },
  { sector: 'Crypto', flag: 'Frequent transfers to mixers or tumblers to obscure transaction history.' },
  { sector: 'Real Estate', flag: 'Purchase of property using multiple cash payments or shell companies.' },
  { sector: 'Trade', flag: 'Over-invoicing or under-invoicing of goods to move value across borders.' },
  { sector: 'Banking', flag: 'Early repayment of loans using cash or funds from offshore accounts.' },
  { sector: 'Cards', flag: 'High-volume purchases of prepaid cards with minimal KYC.' },
  { sector: 'E-commerce', flag: 'Product listings priced significantly above or below fair market value.' },
  { sector: 'E-commerce', flag: 'High-frequency low-value transactions between the same counterparty pairs.' },
  { sector: 'Investment', flag: 'Unusual trading patterns such as counterparty concentration or neutralizing activity.' },
  { sector: 'Insurance', flag: 'Early termination of policies after the cooling-off period.' },
  { sector: 'Insurance', flag: 'Premium overpayments from unrelated third parties.' },
  { sector: 'Insurance', flag: 'Claims filed shortly after the policy becomes effective.' },
  { sector: 'Crypto', flag: 'Transactions involving wallet addresses sanctioned or linked to illegal activity.' },
  { sector: 'Crypto', flag: 'Large purchases withdrawn as fiat through multiple small transactions within 24 hours.' },
  { sector: 'Crypto', flag: 'Purchases that significantly exceed the customer\'s known wealth or source of funds.' },
  { sector: 'Custodial', flag: 'Discrepancies between registered and actual activities of the client.' },
  { sector: 'TCSP', flag: 'Use of nominee directors or shareholders who appear to have no active role in the business.' },
  { sector: 'TCSP', flag: 'Frequent use of shelf companies for transactions without clear commercial purpose.' },
  { sector: 'High-Value Assets', flag: 'Large cash purchases without clear source of funds or supporting documents.' },
  { sector: 'High-Value Assets', flag: 'Loan agreements between unrelated third parties without economic justification.' },
  { sector: 'High-Value Assets', flag: 'Inconsistent valuations (priced significantly higher or lower than market value).' },
  { sector: 'Embassies', flag: 'Official embassy business conducted through personal accounts.' },
  { sector: 'Embassies', flag: 'Funding personal expenses (e.g., education fees) from official accounts.' },
  { sector: 'Military', flag: 'Purchasing military or dual-use goods without a required license.' },
  { sector: 'Import/Export', flag: 'Significant discrepancies between the value of goods on invoices and their fair market value.' }
];
