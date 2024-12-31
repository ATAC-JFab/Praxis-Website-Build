import React from 'react';
import { Link } from 'react-router-dom';

import PartnerSection from '../components/partners/PartnerSection';

const PartnersPage = () => {
  const oversightPartners = [
    {
      name: "Prison and Jail Innovation Lab",
      url: "https://pjil.lbj.utexas.edu/",
      description: "Leading research and innovation in correctional oversight"
    },
    {
      name: "National Resource Center for Correctional Oversight",
      url: "https://prisonoversight.org/",
      description: "Supporting effective oversight of correctional facilities"
    },
    {
      name: "The Prison Policy Initiative",
      url: "https://www.prisonpolicy.org/",
      description: "Research and advocacy for criminal justice reform"
    },
    {
      name: "The Vera Institute",
      url: "https://www.vera.org/",
      description: "Evidence-driven solutions for justice reform"
    },
    {
      name: "The Marshall Project",
      url: "https://www.themarshallproject.org/",
      description: "Nonprofit journalism about criminal justice"
    },
    {
      name: "ACLU National Prison Project",
      url: "https://www.aclu.org/documents/aclu-national-prison-",
      description: "Protecting constitutional rights of prisoners"
    }
  ];

  const reformPartners = [
    {
      name: "FAMM",
      url: "https://www.famm.org",
      description: "Fighting for smart sentencing and prison reform"
    },
    {
      name: "ACLU",
      url: "https://www.aclu.org",
      description: "Defending civil rights and liberties"
    },
    {
      name: "Justice Action Network",
      url: "https://www.justiceactionnetwork.org/",
      description: "Bipartisan criminal justice reform advocacy"
    },
    {
      name: "Dream.org",
      url: "https://Dream.org",
      description: "Building inclusive democracy and economy"
    },
    {
      name: "FWD.us",
      url: "https://www.Fwd.Us",
      description: "Immigration and criminal justice reform"
    },
    {
      name: "Right on Crime",
      url: "https://rightoncrime.com/",
      description: "Conservative criminal justice reform"
    },
    {
      name: "The Brennan Center for Justice",
      url: "https://www.brennancenter.org/",
      description: "Independent, nonpartisan law and policy organization"
    },
    {
      name: "The Sentencing Project",
      url: "https://www.sentencingproject.org/",
      description: "Research and advocacy for reform"
    },
    {
      name: "The Innocence Project",
      url: "https://innocenceproject.org/",
      description: "Exonerating the wrongly convicted"
    },
    {
      name: "Alliance for Safety and Justice",
      url: "https://allianceforsafetyandjustice.org/",
      description: "Advancing policies that create safety"
    }
  ];

  const drugPolicyPartners = [
    {
      name: "Drug Policy Alliance",
      url: "https://drugpolicy.org/",
      description: "Leading drug policy reform organization"
    },
    {
      name: "National Harm Reduction Coalition",
      url: "https://harmreduction.org/",
      description: "Promoting health and dignity in drug policy"
    },
    {
      name: "National Institute on Drug Abuse",
      url: "https://www.nih.gov/about-nih/what-we-do/nih-almanac/national-institute-drug-abuse-nida",
      description: "Science of drug use and addiction"
    },
    {
      name: "SAMHSA National Helpline",
      url: "https://www.samhsa.gov/find-help/national-helpline",
      description: "Treatment referral and information"
    },
    {
      name: "HHS Harm Reduction Strategy",
      url: "https://www.hhs.gov/overdose-prevention/",
      description: "Federal overdose prevention initiative"
    }
  ];

  const doulaPartners = [
    {
      name: "DONA International",
      url: "https://www.dona.org/",
      description: "Leading doula certification organization"
    },
    {
      name: "CAPPA",
      url: "https://cappa.net/",
      description: "Childbirth and postpartum professional association"
    },
    {
      name: "International Childbirth Education Association",
      url: "https://icea.org/",
      description: "Education and certification for birth professionals"
    },
    {
      name: "National Black Doulas Association",
      url: "https://www.blackdoulas.org/",
      description: "Supporting Black maternal health"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-purple-900 text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-navy/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Partners & Friends
            </h1>
            <p className="text-xl text-purple-100">
              Working together with leading organizations to create meaningful change in criminal justice reform, harm reduction, and community support.
            </p>
          </div>
        </div>
      </section>

      <PartnerSection
        title="Independent Prison and Jail Oversight"
        description="Collaborating with leading organizations in correctional oversight and reform to ensure transparency, accountability, and human dignity in our prison systems."
        partners={oversightPartners}
      />

      <PartnerSection
        title="Criminal Legal System Reform"
        description="Working alongside established organizations dedicated to transforming our criminal legal system through policy reform, advocacy, and research."
        partners={reformPartners}
      />

      <PartnerSection
        title="Drug Policy and Risk Mitigation"
        description="Partnering with organizations at the forefront of evidence-based drug policy reform and harm reduction strategies."
        partners={drugPolicyPartners}
      />

      <PartnerSection
        title="Doula Certification and Support"
        description="Collaborating with professional organizations to provide comprehensive doula training and support services."
        partners={doulaPartners}
      />
      
      {/* CTA Section */}
      <section className="py-20 bg-[#D0D0FA] text-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
            <p className="text-xl mb-8">
              Join our network of organizations working together for systemic change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/support"
                className="inline-flex items-center justify-center px-8 py-3 bg-maroon text-white rounded-md hover:bg-teal transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
              >
                Support Our Mission
              </Link>
              <Link
                to="/action"
                className="inline-flex items-center justify-center px-8 py-3 bg-navy text-white rounded-md hover:bg-teal transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;