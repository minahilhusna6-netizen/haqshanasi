import { RightsCategory, RightsArticle } from '../types';

export const RIGHTS_CATEGORIES: RightsCategory[] = [
  {
    id: 'marriage',
    title: 'Marriage & Nikahnama Rights',
    urduTitle: 'نکاح نامہ اور ازدواجی حقوق',
    subtitle: 'Crucial clauses in the marriage contract that protect financial and personal autonomy.',
    summary: 'Under Pakistani law and Islamic jurisprudence, the Nikahnama is a binding legal contract. Women have the statutory right to insert specific protective conditions in Columns 18-22.',
    keyLaws: [
      'Muslim Family Laws Ordinance 1961 (MFLO)',
      'Child Marriage Restraint Act 1929 / Sindh Act 2013',
      'West Pakistan Family Courts Act 1964'
    ],
    iconName: 'FileText'
  },
  {
    id: 'divorce',
    title: 'Divorce, Khula & Custody',
    urduTitle: 'طلاق، خلع اور بچوں کی تحویل',
    subtitle: 'Understanding dissolution of marriage, Iddat, maintenance, and child custody (Hizanat).',
    summary: 'Pakistani law provides structured procedures for marriage dissolution via Talaq, Khula, or judicial divorce, ensuring financial maintenance during Iddat and safeguarding child welfare.',
    keyLaws: [
      'Dissolution of Muslim Marriages Act 1939',
      'Muslim Family Laws Ordinance 1961 (Section 7 & 9)',
      'Guardians and Wards Act 1890 (Custody / Hizanat)'
    ],
    iconName: 'Scale'
  },
  {
    id: 'inheritance',
    title: 'Inheritance & Land Rights',
    urduTitle: 'وراثت اور زمین کا حق',
    subtitle: 'Guaranteed Quranic shares and strict legal protection against forced deprivation.',
    summary: 'In Pakistan, female inheritance rights are guaranteed under Islamic jurisprudence and enforced by statutory laws. Depriving a woman of her inherited property is a major criminal offense.',
    keyLaws: [
      'West Pakistan Muslim Personal Law (Shariat) Application Act 1962',
      'Section 498A Pakistan Penal Code (PPC)',
      'Enforcement of Women’s Property Rights Act 2020'
    ],
    iconName: 'Landmark'
  },
  {
    id: 'property',
    title: 'Property & Dowry (Jahez) Rights',
    urduTitle: 'جائیداد اور جہیز کے حقوق',
    subtitle: 'Distinguishing between Mahr (dower) and Jahez (dowry), and protecting female assets.',
    summary: 'Mahr is an obligatory payment from husband to wife and remains her absolute personal property. Jahez and gifts given to a woman belong strictly to her under Pakistani law.',
    keyLaws: [
      'Dowry and Bridal Gifts (Restriction) Act 1976',
      'Enforcement of Women’s Property Rights Act 2020',
      'Civil Procedure Code 1908 (Property Injunctions)'
    ],
    iconName: 'Key'
  },
  {
    id: 'workplace',
    title: 'Workplace Harassment Protection',
    urduTitle: 'کام کی جگہ پر ہراسانی سے تحفظ',
    subtitle: 'Mandatory Inquiry Committees and swift recourse through the Federal & Provincial Ombudsperson.',
    summary: 'Pakistani law mandates that every public and private organization must form a 3-member Inquiry Committee and adhere to the Code of Conduct protecting women from harassment.',
    keyLaws: [
      'Protection Against Harassment of Women at the Workplace Act 2010',
      'Workplace Harassment Amendment Act 2022',
      'Pakistan Penal Code Section 509'
    ],
    iconName: 'Briefcase'
  },
  {
    id: 'domestic_violence',
    title: 'Domestic Violence & Safe Housing',
    urduTitle: 'گھریلو تشدد سے تحفظ اور محفوظ پناہ',
    subtitle: 'Court-issued Protection Orders, Residence Orders, and official shelter home networks.',
    summary: 'Domestic violence is illegal across Pakistan. Survivors can obtain court-issued Protection Orders barring abusers, secure Residence Orders to stay safely at home, or access Darul Aman shelter homes.',
    keyLaws: [
      'Protection of Women Against Violence Act 2016 (Punjab)',
      'Sindh Domestic Violence (Prevention and Protection) Act 2013',
      'Domestic Violence (Prevention and Protection) Act 2021 (Federal/KPK/Balochistan)'
    ],
    iconName: 'ShieldAlert'
  }
];

export const RIGHTS_ARTICLES: RightsArticle[] = [
  {
    id: 'marriage-nikahnama-clauses',
    categoryId: 'marriage',
    title: 'Nikahnama Columns 18 to 22: Essential Protections Every Woman Must Know',
    urduTitle: 'نکاح نامہ کالم 18 سے 22: اہم حفاظتی شقیں',
    lawCitation: 'Muslim Family Laws Ordinance 1961 (MFLO), Section 5 & Rule 8',
    summary: 'The Nikahnama is not merely a formality; it is a solemn civil and religious contract. Many brides leave Columns 18-22 blank due to societal pressure, forfeiting legal rights.',
    keyRights: [
      'Column 18 (Talaq-e-Tafweez): Delegation of the right of divorce to the wife by the husband. This allows the wife to divorce her husband without surrendering her dower (Mahr).',
      'Column 19: Restrictions or conditions on the husband’s right to divorce.',
      'Column 20: Dower (Mahr) details — clearly separating Prompt Mahr (Mahr-e-Mu’ajjal payable immediately) and Deferred Mahr (Mahr-e-Muwajjal payable upon demand or dissolution).',
      'Column 21: Special conditions regarding monthly maintenance allowances, independent housing, educational/career continuation, and travel rights.',
      'Column 22: Property or assets gifted at the time of marriage.'
    ],
    stepByStepAction: [
      'Inspect the Nikahnama beforehand: Obtain an un-crossed copy of the official Nikahnama form prior to the wedding day.',
      'Explicitly fill Column 18: Ensure the word "Yes" (جی ہاں) or explicit wording ("The bride holds delegated right of divorce") is written. Never allow it to be struck through with a line.',
      'Specify Monthly Maintenance in Column 21: Clearly state a fixed monthly maintenance amount (e.g. PKR 25,000/month index-linked to inflation).',
      'Define Mahr Status in Column 20: Clearly write exact property, gold, or monetary figures for both Prompt and Deferred Mahr.',
      'Register with Union Council: Ensure the Nikah Registrar (Nikah Khawan) registers the document with the local Union Council and obtains official stamped marriage certificates.'
    ],
    commonMisconceptions: [
      {
        claim: 'Filling Column 18 indicates a lack of trust or brings bad luck to the marriage.',
        legalFact: 'Talaq-e-Tafweez is a valid Islamic right established in Shariah and recognized in Pakistani law. It protects a woman from prolonged court battles if the marriage fails.'
      },
      {
        claim: 'If Column 18 is crossed out, a woman can never get a divorce.',
        legalFact: 'Even without Column 18, a woman can seek Khula or Judicial Dissolution in Family Court under the Dissolution of Muslim Marriages Act 1939.'
      }
    ],
    relevantHelpline: '1099 (Ministry of Human Rights Helpline)'
  },
  {
    id: 'divorce-khula-procedure',
    categoryId: 'divorce',
    title: 'The Procedure for Khula and Dissolution of Marriage in Pakistani Courts',
    urduTitle: 'خلع کا قانون اور خاندانی عدالت کا طریقہ کار',
    lawCitation: 'Dissolution of Muslim Marriages Act 1939 & Family Courts Act 1964',
    summary: 'Khula is a woman’s right to seek judicial dissolution of marriage through the Family Court if she can no longer live within the limits prescribed by Allah.',
    keyRights: [
      'Right to file for Khula in the local Family Court where the woman resides.',
      'No requirement for husband’s consent: The court can grant Khula even if the husband refuses.',
      'Prompt court timelines: Family Courts Act mandates resolution within 6 months.',
      'Return of Mahr: A woman seeking Khula surrenders or returns up to 25% of prompt Mahr or unpaid deferred Mahr as determined by court discretion.'
    ],
    stepByStepAction: [
      'Draft a Family Suit: Engage a licensed family lawyer or legal aid cell to file a Plaint for Khula in the Family Court.',
      'Attach Nikahnama & CNIC: Submit marriage certificate copy and National Identity Card.',
      'Summons & Reconciliation: Court issues summons to husband. A mandatory pre-trial reconciliation meeting is held in judge’s chamber.',
      'Grant of Decree: If reconciliation fails, the judge immediately issues a decree of Khula.',
      'Notice to Union Council: Send decree copy to local Union Council for issuance of official Divorce Certificate after 90-day Iddat period.'
    ],
    commonMisconceptions: [
      {
        claim: 'A husband must sign the Khula document for it to be valid.',
        legalFact: 'False. Khula is granted by the decree of the Family Court judge; the husband’s approval or signature is NOT legally required.'
      },
      {
        claim: 'Seeking Khula means losing custody of all children automatically.',
        legalFact: 'False. Custody (Hizanat) is decided separately under the Guardians and Wards Act 1890 based strictly on the best interest and welfare of the child.'
      }
    ],
    relevantHelpline: 'AGHS Legal Aid Cell (042-35845975) / Legal Aid Society (0800-70806)'
  },
  {
    id: 'inheritance-laws-pakistan',
    categoryId: 'inheritance',
    title: 'Female Inheritance Rights and Protection Against Forced Relinquishment',
    urduTitle: 'خواتین کا حقِ وراثت اور زبردستی سے تحفظ',
    lawCitation: 'West Pakistan Land Revenue Act 1967, PPC Section 498A & Women Property Rights Act 2020',
    summary: 'In Pakistan, women are entitled to mandatory inheritance shares in all moveable and immoveable property left by parents, husbands, or children.',
    keyRights: [
      'Quranic Fixed Shares: Daughters inherit 1/2 of a son’s share; a wife inherits 1/8th of husband’s estate (if children exist) or 1/4th (if no children).',
      'Criminal Offense to Deprive (Section 498A PPC): Deceitfully or forcibly coercing a woman to forfeit her inheritance carries 5 to 10 years imprisonment and 1 Million PKR fine.',
      'Enforcement via Ombudsperson: Women can file complaints directly with the Women Property Rights Ombudsperson for speedy recovery without civil court delays.'
    ],
    stepByStepAction: [
      'Obtain Inheritance Certificate (Taqseem/Succession): Apply through NADRA Succession Certificate portal or local Revenue Officer (Tehsildar).',
      'Verify Land Mutation (Intiqal): Check revenue records to confirm female names are entered as co-owners in property mutation registers.',
      'File Complaint with Ombudsperson: If family members block possession or force relinquishment, lodge a case under Enforcement of Women’s Property Rights Act 2020.',
      'Obtain Possession: The Ombudsperson can direct police and district administration to enforce physical possession within 60 days.'
    ],
    commonMisconceptions: [
      {
        claim: 'If a woman received a dowry (Jahez) at her wedding, she forfeits her inheritance share.',
        legalFact: 'Completely false under both Pakistani law and Shariah. Jahez is a voluntary parental gift; it NEVER replaces or waives statutory inheritance shares.'
      },
      {
        claim: 'A woman signing an affidavit waiving her share permanently loses her rights.',
        legalFact: 'Courts routinely strike down forced or uncompensated relinquishment deeds (Tanazul) as void ab initio if obtained under pressure or deceit.'
      }
    ],
    relevantHelpline: '1099 (Human Rights Helpline) / Ombudsperson for Women Property Rights'
  },
  {
    id: 'workplace-harassment-act',
    categoryId: 'workplace',
    title: 'Protection Against Harassment at the Workplace Act 2010 & 2022 Amendments',
    urduTitle: 'کام کے مقام پر ہراسانی کے خلاف قانونی تحفظ',
    lawCitation: 'Protection Against Harassment of Women at the Workplace Act 2010 (amended 2022)',
    summary: 'Every working woman in Pakistan—in formal offices, educational institutes, factories, or informal sectors—has the right to a harassment-free work environment.',
    keyRights: [
      'Mandatory Inquiry Committee: Every organization with 2+ employees must maintain a 3-member Standing Inquiry Committee (with at least one female member).',
      'Expanded Definition (2022 Amendment): Covers physical, verbal, psychological, gender-based discrimination, online workplace harassment, and retaliation.',
      'Direct Appeal to Ombudsperson: A victim can bypass internal committees and file directly with the Federal or Provincial Ombudsperson for Workplace Harassment (FPOAH).'
    ],
    stepByStepAction: [
      'Document Evidence: Keep records of texts, emails, call logs, witness names, or workplace communications.',
      'Submit Written Complaint: File a written complaint to your organization’s internal Inquiry Committee or directly to the Ombudsperson.',
      'Inquiry Timeline: The Committee must complete proceedings and submit findings within 30 days.',
      'Penalties: Penalties include censures, withholding promotions, fines, compulsory retirement, or dismissal from service.',
      'Protection against Retaliation: The employer cannot fire or penalize the complainant during or after proceedings.'
    ],
    commonMisconceptions: [
      {
        claim: 'Only physical touching counts as workplace harassment.',
        legalFact: 'False. Unwelcome sexual remarks, suggestive texts, hostile work environments, created discomfort, and sex-based discrimination are all illegal.'
      },
      {
        claim: 'Free-lancers, domestic workers, or gig workers are not protected.',
        legalFact: 'The 2022 Amendment explicitly expanded protection to informal workers, gig economy workers, interns, students, and freelancers.'
      }
    ],
    relevantHelpline: 'Federal Ombudsperson Secretariat (FPOAH) - 051-9262952 / 1099'
  },
  {
    id: 'domestic-violence-protection',
    categoryId: 'domestic_violence',
    title: 'Domestic Abuse Laws, Restraining Orders, and Emergency Shelter Rights',
    urduTitle: 'گھریلو تشدد، عدالتی ممانعتی احکامات اور دارالامان',
    lawCitation: 'Punjab Protection of Women Against Violence Act 2016 & Provincial Acts',
    summary: 'Domestic violence includes physical assault, emotional abuse, psychological torture, stalking, and economic deprivation within domestic relationships.',
    keyRights: [
      'Protection Orders: Family Court or magistrate can issue emergency orders prohibiting the abuser from entering the victim’s space or contacting her.',
      'Residence Orders: Prohibits the abuser from evicting or disturbing the victim from the shared household.',
      'Monetary Orders: Mandates abuser to pay medical costs, relocation expenses, and maintenance.',
      'Right to State Shelter (Darul Aman): Immediate access to safe state-managed shelter homes with security, meals, and medical/legal aid.'
    ],
    stepByStepAction: [
      'Ensure Immediate Safety: Call Police Emergency (15), Women Helpline (1099), or Edhi Rescue (115).',
      'Obtain Medical Certificate (MLC): Visit a government hospital for a Medico-Legal Certificate if physical injuries occurred.',
      'File Application for Protection Order: Submit application to magistrate or Women Protection Officer in your district.',
      'Access Safe Housing: Request placement at local Darul Aman or Panah Shelter Home through court or police escort.'
    ],
    commonMisconceptions: [
      {
        claim: 'Domestic violence is a private family matter and police cannot intervene.',
        legalFact: 'Domestic violence is a recognized criminal offense under Pakistani law. Police and Women Protection Officers are required by law to register FIRs and assist.'
      },
      {
        claim: 'A woman leaving an abusive house loses all rights to her clothes and children.',
        legalFact: 'The court can issue orders for immediate recovery of personal belongings, dowry items, and temporary custody of children.'
      }
    ],
    relevantHelpline: 'Emergency Police (15) / Women Helpline (1099) / Punjab Protection Center (1043)'
  }
];
