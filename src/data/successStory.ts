/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StorySection } from "../types";

export const SUCCESS_STORY: StorySection[] = [
  {
    id: "header",
    title: "Coca-Cola HBC x Microsoft",
    paragraphs: [
      {
        id: "p-subtitle",
        sectionId: "header",
        text: "MEDDPICC Sales Qualification Analysis. A deep-dive analysis of the Coca-Cola HBC success story mapped to the MEDDPICC framework, examining how Microsoft identified, qualified, and closed its landmark enterprise security, endpoint, device management, and SIEM/SOAR integration deal."
      },
      {
        id: "p-stats",
        sectionId: "header",
        text: "Key Outcomes: 99.99% Threat & Access Accuracy achieved within 2 months. 10% Productivity Increase in warehouse operations. Up to 50% Downtime Reduction on production lines. Across 29+ Warehouses Deployed in 17 countries with over 1,000+ users."
      }
    ]
  },
  {
    id: "sec1",
    title: "1. Executive Summary",
    paragraphs: [
      {
        id: "p-1-1",
        sectionId: "sec1",
        text: "Coca-Cola Hellenic Bottling Company (HBC) is one of the world's largest bottlers for The Coca-Cola Company, operating in 28 countries with sales exceeding two billion units annually. The company's engagement with Microsoft represents a multi-phase, multi-product enterprise security and compliance transformation that began with a single pilot in Thessaloniki, Greece and expanded to 29 warehouses across 17 countries, empowering over 1,000 users. This analysis maps the Coca-Cola HBC engagement to the MEDDPICC sales qualification framework, examining how Microsoft identified the customer's operational and cybersecurity pain points, built internal champions, navigated the procurement process, and ultimately delivered measurable ROI that fueled continued expansion of the security partnership."
      },
      {
        id: "p-1-2",
        sectionId: "sec1",
        text: "The deal is notable for several reasons. First, it demonstrates the power of a land-and-expand strategy: starting with a small threat protection and endpoint security pilot and scaling to a full enterprise deployment. Second, it illustrates how Microsoft leveraged its partner ecosystem (Invelon Technologies as system integrator) to deliver a complete solution with SAP integration. Third, it shows the compounding value of multiple products in the Microsoft portfolio: Defender for endpoint security and XDR threat protection, Entra for secure identity and conditional access governance, Intune for mobile security and device management, Purview for compliance and data governance (DLP), Sentinel for threat detection and automated response (SIEM & SOAR), and Security Copilot for AI-powered SecOps threat analysis. Each product expansion was driven by the success of the previous one, creating a virtuous cycle of value delivery and trust-building."
      }
    ]
  },
  {
    id: "sec2",
    title: "2. Customer Background",
    paragraphs: [
      {
        id: "p-2-1",
        sectionId: "sec2",
        text: "Coca-Cola HBC is a leading bottling partner of The Coca-Cola Company, responsible for producing, packaging, and distributing the entire Coca-Cola product range across 28 countries in Europe, Asia, and Africa. The company processes more than two billion unit sales every year, making logistics, warehouse efficiency, and operational security critical to its operational success. Their warehouse and shipping operations rely on mixed pallet picking and rugged IoT terminals, where crates and materials are managed on pallets for delivery trucks."
      },
      {
        id: "p-2-2",
        sectionId: "sec2",
        text: "The sheer volume of daily shipments means that security vulnerabilities, unmanaged endpoints, and unauthenticated logins could lead to critical supply chain disruptions, data leaks, and rejected deliveries. Prior to engaging with Microsoft, Coca-Cola HBC's warehouse operations relied on legacy unmanaged scanners, tablets mounted on pallet jacks, and disjointed security methods. These inconsistent, outdated methodologies were identified as highly inefficient and a source of active endpoint threat vulnerabilities. The company was also facing labor shortages in European markets, demanding operational productivity improvements. On the manufacturing side, production line downtime caused by delayed incident response or cyber threat triaging was a recurring problem, and compliance documentation was manual, time-consuming, and error-prone."
      }
    ]
  },
  {
    id: "sec3",
    title: "3. MEDDPICC Framework Analysis",
    paragraphs: [
      {
        id: "p-3-1",
        sectionId: "sec3",
        text: "MEDDPICC is a sales qualification framework widely used in enterprise B2B sales to assess deal health, identify risks, and accelerate pipeline velocity. The acronym stands for Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Implicating Pain, Champion, and Competition. Below, each element is analyzed in the context of the Coca-Cola HBC and Microsoft engagement, drawing on publicly available case study data, partner reports, and industry analysis."
      }
    ]
  },
  {
    id: "sec3_1",
    title: "3.1 Metrics (M)",
    paragraphs: [
      {
        id: "p-3-1-1",
        sectionId: "sec3_1",
        text: "Metrics represent the quantifiable outcomes that the customer expects to achieve. In the Coca-Cola HBC engagement, Microsoft demonstrated clear, measurable ROI across multiple security and compliance dimensions. The metrics were not aspirational targets but were achieved results, which became the foundation for the expand phase of the enterprise deal. The ability to point to concrete, realized metrics from the initial pilot was instrumental in securing buy-in for the broader global rollout."
      },
      {
        id: "p-3-1-2",
        sectionId: "sec3_1",
        text: "The metrics dimension of this deal is exceptionally strong. Microsoft did not simply promise improvements; they delivered quantifiable security, access, and compliance results within two months of the initial pilot. Suzana Rari, Supply Chain Manager at Coca-Cola HBC Greece and Cyprus, articulated the business case vividly: 'We needed to improve our picking transaction security and device uptime. With the high volumes we ship, even a tiny failure rate or security breach can lead to wrong log entries and halted truck dispatches.' This concrete articulation of the cost of inaction made the metrics case compelling and enabled rapid expansion beyond the Thessaloniki pilot site."
      }
    ]
  },
  {
    id: "sec3_2",
    title: "3.2 Economic Buyer (E)",
    paragraphs: [
      {
        id: "p-3-2-1",
        sectionId: "sec3_2",
        text: "The Economic Buyer is the individual or group with the authority to allocate budget and approve the purchase. In a complex enterprise like Coca-Cola HBC, the economic buyer for this engagement sits at the intersection of supply chain operations, security governance, and executive leadership. Given the scale of the deployment (29 warehouses across 17 countries), the budget authority required C-suite or VP-level sponsorship, likely from the Chief Supply Chain Officer or Chief Information Security Officer (CISO)."
      },
      {
        id: "p-3-2-2",
        sectionId: "sec3_2",
        text: "Key identified stakeholders include Angel Boyanov, Digital Security Product Manager for Warehouse Management and Cold Drinks Operations, who served as the primary product owner and internal champion, and Suzana Rari, Supply Chain Manager for Greece and Cyprus, who provided operational validation and ground-level credibility. While these individuals are not the ultimate economic buyers, they are the critical link between the operational pain points and the executive decision-makers. Angel Boyanov's statement that 'unified endpoint protection and modern identity governance is not an innovation project, but an enterprise solution at scale' signals that the initiative had moved beyond experimental status and secured formal enterprise budget allocation."
      },
      {
        id: "p-3-2-3",
        sectionId: "sec3_2",
        text: "IT / SAP Governance provided the technical gatekeeping for the deal. Achieving backend connection to the SAP WMS and central Active Directory was crucial for a successful purchase. Executive Leadership eventually provided budget approval for the broader rollout across 17 countries, representing the true (though inferred) Economic Buyer."
      }
    ]
  },
  {
    id: "sec3_3",
    title: "3.3 Decision Criteria (D)",
    paragraphs: [
      {
        id: "p-3-3-1",
        sectionId: "sec3_3",
        text: "Decision Criteria represent the standards and requirements that the customer uses to evaluate and select a vendor. For Coca-Cola HBC, the decision criteria were shaped by their cyber-defense challenges, zero-trust requirements, and their ambition to set a new standard for secure warehousing technology across their global operations. Based on the case study data, the following decision criteria can be identified and prioritized:"
      },
      {
        id: "p-3-3-2",
        sectionId: "sec3_3",
        text: "Threat Protection was categorized as Critical: near-elimination of unverified devices and unauthorized logins to reduce system exposure and data leaks. Microsoft addressed this with Defender endpoint threat protection and Entra conditional access, achieving 99.99% access validation accuracy within 2 months. Scalability was also Critical, demanding the solution scale across 28 countries with diverse warehouse operational devices. Deployed to 29 warehouses across 17 countries with 1,000+ users via a reusable rollout template. Backend Integration with existing SAP WMS was rated High priority, addressed via integrator Invelon using Azure secure APIs for real-time secure order updates. Compliance Control was High, handled by giving workers an intuitive and easy multi-factor sign-on interface. SIEM & SOAR was High, requiring automated triage for threat detection to prevent physical shipping bottlenecks, solved with Sentinel triggering automated responses and playbooks. CAPEX Efficiency and Vendor Support were Medium priority, addressed by lower licensing consolidation costs compared to best-of-breed siloed agents, and Microsoft's continuous after-go-live customer success support under their Enterprise Agreement."
      }
    ]
  },
  {
    id: "sec3_4",
    title: "3.4 Decision Process (D)",
    paragraphs: [
      {
        id: "p-3-4-1",
        sectionId: "sec3_4",
        text: "The Decision Process describes the steps and milestones the customer follows to make a purchase decision. The Coca-Cola HBC engagement followed an elegant land-and-expand pattern, which is characteristic of enterprise software deals where risk aversion drives a phased approach. The decision process unfolded across several distinct phases, each building on the success of the previous one:"
      },
      {
        id: "p-3-4-2",
        sectionId: "sec3_4",
        text: "Phase 1: Pilot in 2019 at Thessaloniki, Greece with 16 users. It deployed Defender and Intune on smart endpoints, tested against legacy voice devices, leading to positive worker feedback and an immediate decision to scale. Phase 2: Initial Ramp-Up in 2019 expanded into 6 additional warehouses, refining Entra integration and validating scalability. Phase 3: Mass Rollout in 2019-2022 covering 29 warehouses across 17 countries, onboarding 1,000+ users and making Microsoft modern endpoint management the standard. Phase 4: Product Expansion (2020+) to 18 logistics locations (plants and DCs) adding Sentinel for automated threat detection and Purview for compliance and data governance (DLP), achieving 50% security incident downtime reduction and 30% faster onboarding. Phase 5: Continued Growth (2023+) planning 5+ additional warehouse go-lives, committing long-term to the unified Microsoft Enterprise Agreement platform."
      }
    ]
  },
  {
    id: "sec3_5",
    title: "3.5 Paper Process (P)",
    paragraphs: [
      {
        id: "p-3-5-1",
        sectionId: "sec3_5",
        text: "The Paper Process refers to the procurement, legal, and administrative steps required to finalize a deal. While specific contract details are not publicly available, several aspects of the paper process can be inferred from the engagement structure and industry norms for enterprise software deals of this scale:"
      },
      {
        id: "p-3-5-2",
        sectionId: "sec3_5",
        text: "• Enterprise Procurement: Given the scope (17 countries, 29 warehouses), the procurement process required multi-level approval across regional and global procurement teams, involving formal RFP processes, security assessments, and vendor due diligence under the Microsoft Enterprise Agreement structure."
      },
      {
        id: "p-3-5-3",
        sectionId: "sec3_5",
        text: "• System Integrator Partnership: The involvement of Invelon Technologies as the system integrator indicates a multi-vendor contracting structure, where Microsoft provided the software licensing platform, Invelon delivered implementation services, and partner systems provided the ruggedized hardware. This adds complexity to the paper process but also de-risks the deployment for the customer."
      },
      {
        id: "p-3-5-4",
        sectionId: "sec3_5",
        text: "• SAP Integration Governance: The full backend integration with SAP WMS required IT governance approval, including data security review, API compatibility testing, and change management board approval. This is typically one of the most time-consuming aspects of the paper process in large enterprises."
      },
      {
        id: "p-3-5-5",
        sectionId: "sec3_5",
        text: "• Multi-Year Commitment: The phased rollout spanning 2019-2023+ suggests a multi-year Microsoft Enterprise Agreement (ELA) structure with milestone-based commitments, rather than a one-time purchase."
      },
      {
        id: "p-3-5-6",
        sectionId: "sec3_5",
        text: "• Country-Specific Compliance: Deploying across 17 countries introduces GDPR, local labor law, and regulatory compliance requirements, fully handled via Purview data governance tools tracking device telemetry and user access privacy. This addresses additional workplace privacy considerations and legal reviews in each jurisdiction."
      }
    ]
  },
  {
    id: "sec3_6",
    title: "3.6 Implicating Pain (I)",
    paragraphs: [
      {
        id: "p-3-6-1",
        sectionId: "sec3_6",
        text: "Implicating Pain identifies the specific business problems that create urgency for the customer to act. In the Coca-Cola HBC engagement, the pain points were both strategic (affecting business outcomes at scale) and operational (affecting daily warehouse and production workflows). The most powerful pain points were those that could be quantified in terms of financial impact, as Suzana Rari's quote demonstrates: 'We needed to improve our picking transaction security and device uptime. With the high volumes we ship, even a tiny failure rate or security breach can lead to wrong log entries and halted truck dispatches.'"
      },
      {
        id: "p-3-6-2",
        sectionId: "sec3_6",
        text: "The main identified pain points were: Picking Errors & Access Risks (Operational pain of unmanaged terminals leading to high security exposures, unverified access, and data leakage), Customer Complaints (Strategic pain of brand reputation damage due to shipment delays), Labor Shortages (Strategic pain of labor constraints requiring higher productivity per worker), Security Downtime (Operational pain of siloed legacy security tools leading to slow incident triage with stoppage costs exceeding $10,000/hour), Manual Compliance Documentation (Operational pain of manual compliance reporting and inspection trails), and Remote Management Needs (Operational pain of maintaining diverse hardware across 28 countries resulting in excessive IT support travel)."
      }
    ]
  },
  {
    id: "sec3_7",
    title: "3.7 Champion (C)",
    paragraphs: [
      {
        id: "p-3-7-1",
        sectionId: "sec3_7",
        text: "The Champion is the internal advocate who actively sells the solution within their organization. A strong champion has influence, credibility, and a personal stake in the solution's success. In the Coca-Cola HBC engagement, two champions can be clearly identified from the public case study data:"
      },
      {
        id: "p-3-7-2",
        sectionId: "sec3_7",
        text: "Angel Boyanov, Digital Security Product Manager, Warehouse Management & Cold Drinks Operations. He acted as the technical authority on warehouse digitalization, bridged operations and IT, and owned the product vision. He publicly framed modern security as 'not an innovation project, but an enterprise solution at scale,' signaling executive-level advocacy."
      },
      {
        id: "p-3-7-3",
        sectionId: "sec3_7",
        text: "Suzana Rari, Supply Chain Manager for Greece and Cyprus. She represented the operational authority with direct P&L impact. She provided a credible voice from the warehouse floor, quantified the pain in compelling terms, and validated the solution in her operational domain."
      },
      {
        id: "p-3-7-4",
        sectionId: "sec3_7",
        text: "Warehouse Workers (Collective) - Over 1,000 users across 17 countries. They were end-user advocates who tested and explicitly preferred Microsoft modern endpoint interface and Intune devices. Their high engagement and satisfaction rates accelerated the transition across the enterprise."
      }
    ]
  },
  {
    id: "sec3_8",
    title: "3.8 Competition (C)",
    paragraphs: [
      {
        id: "p-3-8-1",
        sectionId: "sec3_8",
        text: "The final C in MEDDPICC examines the competitive landscape and how Microsoft differentiated itself from alternatives. In the Coca-Cola HBC engagement, Microsoft faced competition from both internal status quo configurations and best-of-breed technology point-solutions:"
      },
      {
        id: "p-3-8-2",
        sectionId: "sec3_8",
        text: "Competition came from Siloed Security Point Solutions (Alternative Technology, which security teams rejected as less unified with no correlated threat view), Legacy Unmanaged RF Devices (Status Quo which was familiar but vulnerable to exploits with zero identity enforcement), Outdated Manual Access Worksheets (Status Quo with highest error rates and zero data protection compliance), Unsecured Android Tablet Workstations (Status Quo with limited mobility and high risk of lateral attack), and Niche MDM & Endpoint Software Providers (Direct Competitor lacking Microsoft's built-in platform suite (Defender, Entra, Intune, Purview, Sentinel, Security Copilot), deep SAP integration, and global Enterprise Agreement (ELA) scale)."
      }
    ]
  },
  {
    id: "sec4plus",
    title: "4. Sales Methods & Customer Environment Takeaways",
    paragraphs: [
      {
        id: "p-4-1",
        sectionId: "sec4plus",
        text: "Sales Methods employed included Land and Expand (starting small with Thessaloniki deployment and scaling to 29 warehouses) and Solution Selling (framing Defender for Endpoint and XDR, Entra for passwordless identity, Intune for modern device management, Purview for compliance, Sentinel for SIEM/SOAR incident response, and Security Copilot for AI threat analysis). Other key strategies included Champion Enablement, leveraging the Partner Ecosystem (Invelon), and using worker-centric design."
      }
    ]
  }
];
