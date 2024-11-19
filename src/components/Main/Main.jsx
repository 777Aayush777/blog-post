import React, { useEffect, useState } from "react";
import "./Main.css";

export default function Main() {
  const [headings, setHeadings] = useState([]);
  const [activeSection, setActiveSection] = useState("");

  // Extract headings from the content
  useEffect(() => {
    const extractedHeadings = Array.from(
      document.querySelectorAll(".blog-rich-text h2")
    ).map((heading) => ({
      id: heading.id || heading.textContent.replace(/\s+/g, "-").toLowerCase(),
      text: heading.textContent,
    }));

    setHeadings(extractedHeadings);

    // Assign IDs dynamically if missing
    extractedHeadings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (!element) heading.id = heading.text;
    });
  }, []);

  // Scroll spy to highlight the active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = headings.map(({ id }) => {
        const element = document.getElementById(id);
        return { id, offsetTop: element?.offsetTop || 0 };
      });

      const currentSection = sections.reverse().find(({ offsetTop }) => scrollPosition >= offsetTop);

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

            return (
                <section className="Section blogContent">
                <div className="mainContainer">
                    <div className="bloggrid">
                    <div className="toc-content">
                        <div className="blog-rich-text w-richtext">
                            <p>In the realm of health insurance, OPD coverage refers to the provision of coverage for Outpatient Department (OPD) treatments and services. Unlike traditional health insurance policies that mainly cover hospitalisation expenses, OPD coverage extends to medical consultations, diagnostic tests, medications, and other healthcare services availed on an outpatient basis.</p>
                            <p>This comprehensive blog aims to provide a detailed understanding of OPD coverage, including its definition, types, how to obtain it for your employees, the exclusions and inclusions in an OPD policy, and important policy details for corporates considering OPD coverage.</p>
                            <h2><strong>What is OPD Coverage?</strong></h2>
                            <p>OPD coverage is a valuable healthcare benefit that ensures employees receive financial assistance for medical expenses incurred during outpatient visits. It encompasses a wide range of services, including doctor consultations, diagnostic tests, prescription medications, vaccinations, physiotherapy sessions, and preventive healthcare check-ups. OPD coverage helps employees manage routine healthcare costs without the need for hospitalization, making it an essential component of comprehensive employee health benefits.</p>
                            <h2>Types of OPD Coverage:</h2>
                            <p><strong>a) Reimbursement-Based OPD Coverage:</strong> In this type of coverage, employees pay for their outpatient treatments and services out of pocket and later submit the bills and receipts to the insurance provider for reimbursement. The insurance provider reimburses a portion or the entire amount, subject to the coverage limit specified in the policy. This type of coverage offers flexibility in choosing healthcare providers but requires employees to handle the upfront payment and subsequent reimbursement process.</p>
                            <p><p><strong>b) Direct Settlement OPD Coverage:</strong> Under direct settlement OPD coverage, employees can avail of the covered OPD treatments and services without upfront payment. The insurance provider directly settles the bills with the healthcare provider, up to the specified coverage limit. This type of coverage eliminates the need for employees to handle financial transactions at the time of treatment, providing convenience and streamlining the reimbursement process.</p></p>
                            <h2>How to Get OPD Coverage for Your Employees?</h2>
                            <p>To provide OPD coverage for your employees, follow these steps or <a href="https://www.novabenefits.com/"><strong><em>schedule a call with team Nova Benefits</em></strong></a>:</p>
                            <p><strong>a) Assess Insurance Providers:</strong> Research insurance providers that offer OPD coverage as part of their employee health insurance plans. Consider factors such as the provider's reputation, the network of healthcare providers, claim settlement process, and customer service to ensure reliability and quality coverage.</p>
                            <p><strong>b) Evaluate Coverage Options:</strong> Understand the different OPD coverage options available, such as reimbursement-based or direct settlement. Assess the coverage limits, network providers, geographic coverage, add-on features, and customisation options offered by insurance providers to select the most suitable coverage for your employees' needs.</p>
                            <p><strong>c) Customise the Policy:</strong> Work with the insurance provider to customise the OPD coverage according to your organisation's requirements. Determine the coverage limit per employee, any deductible or co-payment requirements, specific exclusions or limitations, and any additional features desired.</p>
                            <p><strong>d) Communicate the Policy to Employees:</strong> Clearly communicate the addition of OPD coverage to your employees. Provide comprehensive information about the coverage, including the process of availing benefits, network providers, any co-payment requirements, and any restrictions or limitations that apply.</p>
                            <p><strong>e) Employee Enrolment and Support:</strong> Facilitate the enrolment process by collecting necessary employee information and assisting them in understanding the policy terms and procedures. Offer support channels for claim-related queries or issues, ensuring employees can easily access the benefits provided by the OPD coverage.</p>
                            <h2>What are the inclusions of an OPD Policy?</h2>
                            <p>While the specific inclusions may vary depending on the insurance provider and policy, typical inclusions in an OPD policy may encompass:</p>
                            <p><strong>a) Consultation Fees: </strong>Coverage for doctor consultations across various specialties, allowing employees to seek medical advice and treatment for their healthcare needs.</p>
                            <p><strong>b) Diagnostic Tests:</strong> Coverage for a wide range of diagnostic tests, including laboratory tests, radiology examinations, and other investigative procedures.</p>
                            <p><strong>c) Medications:</strong> Coverage for prescribed medications, ensuring employees have access to essential drugs prescribed during their outpatient visits.</p>    
                            <p><strong>d) Preventive Healthcare:</strong> Coverage for preventive healthcare check-ups, vaccinations, health screenings, and wellness programs that promote employee well-being and early disease detection.</p>
                            <p><strong>e) Specialist Visits: </strong>Coverage for consultations with specialists, such as cardiologists, orthopedists, dermatologists, and other healthcare professionals based on the policy terms.</p>
                            <p>f) Physiotherapy Sessions: Coverage for physiotherapy sessions that aid in the rehabilitation and management of musculoskeletal conditions.</p>
                            <h2>What are the exclusions of an OPD Policy?</h2>
                            <p>While the specific exclusions may vary depending on the insurance provider and policy, common exclusions in an OPD policy may include:</p>
                            <p><strong>a) Pre-Existing Conditions:</strong> OPD coverage often excludes pre-existing conditions, which are medical conditions diagnosed before the policy's effective date. However, coverage for subsequent treatments or consultations related to these conditions may be included after a waiting period.</p>
                            <p><strong>b) Cosmetic Treatments</strong>: Procedures deemed cosmetic in nature, such as plastic surgery for non-medical reasons or beauty treatments, are generally excluded from OPD coverage.</p>
                            <p><strong>c) Experimental or Investigational Treatments:</strong> OPD policies may exclude coverage for treatments that are experimental, investigational, or not approved by relevant medical authorities.</p>
                            <p><strong>d) Alternative or Complementary Medicine:</strong> Services provided by alternative or complementary medicine practitioners, such as homeopathy or acupuncture, may be excluded unless specifically mentioned in the policy.</p>
                            <h2>Important Policy Details of OPD Coverage for Corporates:</h2>
                            <p><strong>a) Coverage Limits:</strong> OPD coverage may have a per-employee limit or an overall limit for the organisation, specifying the maximum amount that can be claimed for OPD expenses during a policy year.</p>
                            <p><strong>a) Coverage Limits:</strong> OPD coverage may have a per-employee limit or an overall limit for the organisation, specifying the maximum amount that can be claimed for OPD expenses during a policy year.</p>
                            <p><strong>c) Network Providers:</strong> Insurance providers often have a network of preferred healthcare providers. Employees may be encouraged to utilise network providers to avail of maximum benefits, including cashless services.</p>
                            <p><strong>d) Claims Process:</strong> Familiarise yourself with the claims process, including the submission of bills, required documentation, and turnaround time for claim settlement. Clear communication about the claims process to employees can help streamline the reimbursement experience.</p>
                            <p><strong>e) Policy Renewal:</strong> Understand the renewal process, including any changes in premiums, coverage limits, or terms. It is essential to review the policy periodically to ensure it continues to meet the evolving needs of your employees and the organisation.</p>
                            <p>OPD coverage is a crucial component of comprehensive employee healthcare benefits, providing financial assistance for outpatient treatments and services. By understanding the types of OPD coverage, how to obtain it for your employees, the exclusions, and inclusions in an OPD policy, and important policy details for corporates, you can make informed decisions when designing an employee benefits package. Offering OPD coverage demonstrates a commitment to employee well-being, ensuring they have access to quality healthcare services and empowering them to maintain their health and productivity.</p>
                            <h3><strong>In conclusion</strong></h3>
                            <p>OPD coverage is a crucial component of comprehensive employee healthcare benefits, providing financial assistance for outpatient treatments and services. By understanding the types of OPD coverage, how to obtain it for your employees, the exclusions, and inclusions in an OPD policy, and important policy details for corporates, you can make informed decisions when designing an employee benefits package. Offering OPD coverage demonstrates a commitment to employee well-being, ensuring they have access to quality healthcare services and empowering them to maintain their health and productivity.</p>
                            <p>&zwj;</p>
                        </div>
                        
                        {/* Table of Contents */}
                        <aside className="toc-container">
                            <h3>Table of Contents</h3>
                            <ul>
                            {headings.map(({ id, text }) => (
                                <li key={id}>
                                <a
                                    href={`#${id}`}
                                    className={activeSection === id ? "active" : ""}
                                >
                                    {text}
                                </a>
                                </li>
                            ))}
                            </ul>
                        </aside>
                        </div>
                    </div>
                    </div>
                </section>
                );
}