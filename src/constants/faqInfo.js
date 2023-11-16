import React from "react";
import StaticAnswer from "../components/StaticAnswer";

export const TOPICS = [
  {
    title: "FLU/INFLUENZA",
    content: [
      {
        id: 0,
        question: "What is flu / influenza?",
        answer: (
          <StaticAnswer answer="Flu is a contagious respiratory illness caused by influenza viruses that infect the nose, throat, and sometimes the lungs. It can cause mild to severe illness, and at times can lead to death. The best way to prevent flu is by getting a flu vaccine each year."></StaticAnswer>
        ),
      },
      {
        id: 1,
        question: "What are the symptons of flu?",
        answer: (
          <StaticAnswer>
            <p>
              Influenza (flu) can cause mild to severe illness, and at times can
              lead to death. Flu symptoms usually come on suddenly. People who
              have flu often feel some or all of these symptoms:
            </p>
            <ul>
              <li>fever* or feeling feverish/chills</li>
              <li>cough</li>
              <li>sore throat</li>
              <li>runny or stuffy nose</li>
              <li>muscle or body aches</li>
              <li>headaches</li>
              <li>fatigue (tiredness)</li>
              <li>
                some people have vomiting or diarrhea, though this is more
                common in children than adults
              </li>
            </ul>
            <small>
              *It is important to note that not everyone with the flu will have
              a fever.{" "}
            </small>
            <small>
              For more info, visit{" "}
              <a href="https://www.cdc.gov/flu/symptoms/flu-vs-covid19.htm">
                Flu and COVID-19 symptoms
              </a>
            </small>
          </StaticAnswer>
        ),
      },
      {
        id: 2,
        question: "How does the Flu spread?",
        answer: (
          <StaticAnswer>
            <p>
              Influenza viruses are spread from person to person. This can
              happen when an infected person coughs or sneezes. Coughs and
              sneezes produce virus-laden droplets that can spread through the
              air. Flu also can be spread when droplets from a cough or sneeze
              land on objects like doorknobs, light switches, etc. If others
              touch the objects and then touch their own mouth or nose (or
              someone else's mouth or nose) before washing their hands, the
              virus can be spread.{" "}
            </p>
            <p>
              You can pass the flu to someone else both before and while you are
              sick. Adults may be able to infect others beginning one day before
              symptoms develop and up to five to seven days after becoming sick.
              Some people, especially young children and people with weakened
              immune systems, might be able to infect others for an even longer
              time.
            </p>
          </StaticAnswer>
        ),
      },
      {
        id: 3,
        question: "How many people get sick with flu every year?",
        answer: (
          <StaticAnswer>
            <p>
              A{" "}
              <a href="https://academic.oup.com/cid/article/66/10/1511/4682599">
                2018 CDC study published in Clinical Infectious Diseases
              </a>{" "}
              looked at the percentage of the U.S. population who got sick with
              flu using two different methods and compared the findings. Both
              methods had similar findings, which suggested that on average,
              about 8 percent of the U.S. population gets sick from flu each
              season, with a range of between 3 percent and 11 percent,
              depending on the season.
            </p>
          </StaticAnswer>
        ),
      },
      {
        id: 4,
        question: "Who is most likely to get sick with flu?",
        answer: (
          <StaticAnswer>
            <p>
              The same{" "}
              <a href="https://academic.oup.com/cid/article/66/10/1511/4682599">
                CID study
              </a>{" "}
              found that children are most likely to get sick from flu and that
              people 65 and older are least likely to get sick from flu. Median
              incidence values (or attack rate) by age group were 9.3% for
              children 0-17 years, 8.8% for adults 18-64 years, and 3.9% for
              adults 65 years and older. This means that children younger than
              18 are more than twice as likely to develop a symptomatic flu
              virus infection than adults 65 and older.
            </p>
            <small>
              More info:{" "}
              <a href="https://www.cdc.gov/flu/about/keyfacts.htm">Key Facts</a>
            </small>
          </StaticAnswer>
        ),
      },
      {
        id: 5,
        question: "Why should people get vaccinated against the flu?",
        answer: (
          <StaticAnswer>
            <p>
              Influenza (flu) is a potentially serious disease that can lead to
              hospitalization and sometimes even death. Every flu season is
              different, and flu can affect people differently, but during
              typical flu seasons, millions of people get flu, hundreds of
              thousands of people are hospitalized and thousands to tens of
              thousands of people die from flu-related causes. Flu can mean a
              few days of feeling bad and missing work, school, or family
              events, or it can result in more serious illness.
            </p>

            <p>
              <a href="https://wcms-wp.cdc.gov/flu/symptoms/symptoms.htm">
                Complications of flu
              </a>{" "}
              can include bacterial pneumonia, ear infections, sinus infections
              and worsening of chronic medical conditions, such as congestive
              heart failure, asthma, or diabetes. An annual seasonal flu vaccine
              is the best way to help reduce the risk of getting flu and any of
              its potentially serious complications. Vaccination has been shown
              to have many{" "}
              <a href="https://wcms-wp.cdc.gov/flu/prevent/keyfacts.htm#benefits">
                benefits
              </a>{" "}
              including reducing the risk of flu illnesses, hospitalizations and
              even the risk of flu-related death. While some people who get a
              flu vaccine may still get sick with influenza, flu vaccination has
              been shown in several studies to reduce severity of illness.
            </p>
          </StaticAnswer>
        ),
      },
      {
        id: 6,
        question: "How do flu vaccines work?",
        answer: (
          <StaticAnswer>
            <p>
              Flu vaccines cause antibodies to develop in the body about two
              weeks after vaccination. These antibodies provide protection
              against flu illness. Seasonal flu vaccines are designed to protect
              against the influenza viruses that research indicates will be most
              common during the upcoming season. All flu vaccines in the United
              States are “quadrivalent” vaccines, which means they protect
              against four different flu viruses: an influenza A(H1N1) virus, an
              influenza A(H3N2) virus, and two influenza B viruses.
            </p>
          </StaticAnswer>
        ),
      },
      {
        id: 7,
        question: "What are the benefits of flu vaccinations?",
        answer: (
          <StaticAnswer>
            <div>
              <p className="faq-bold">
                <a href="https://www.cdc.gov/flu/prevent/index.html">
                  Flu vaccination
                </a>{" "}
                can keep you from getting sick with flu.
              </p>
              <ul>
                <li>
                  Flu vaccine prevents millions of illnesses and flu-related
                  doctor’s visits each year. For example, during{" "}
                  <a href="https://www.cdc.gov/flu/about/burden-averted/2019-2020.htm">
                    2019-2020
                  </a>
                  , the last flu season prior to the COVID-19 pandemic, flu
                  vaccination prevented an estimated 7.5 million influenza
                  illnesses, 3.7 million influenza-associated medical visits,
                  105,000 influenza-associated hospitalizations, and 6,300
                  influenza-associated deaths.
                </li>
                <li>
                  During seasons when flu vaccine viruses are similar to
                  circulating flu viruses, flu vaccine has been shown to reduce
                  the risk of having to go to the doctor with flu by 40% to 60%.
                </li>
              </ul>
            </div>

            <div>
              <p className="faq-bold">
                Flu vaccination has been shown in several studies to reduce
                severity of illness in people who get vaccinated but still get
                sick.
              </p>
              <ul>
                <li>
                  A{" "}
                  <a href="https://www.sciencedirect.com/science/article/pii/S0264410X21005624?dgcid=author">
                    2021 study
                  </a>{" "}
                  showed that among adults hospitalized with flu, vaccinated
                  patients had a 26% lower risk of intensive care unit (ICU)
                  admission and a 31% lower risk of death from flu compared with
                  those who were unvaccinated.
                </li>
                <li>
                  A{" "}
                  <a href="https://www.sciencedirect.com/science/article/pii/S0264410X18309976?via%3Dihub">
                    2018 study
                  </a>{" "}
                  showed that among adults hospitalized with flu, vaccinated
                  patients were 59% less likely to be admitted to the ICU than
                  those who had not been vaccinated. Among adults in the ICU
                  with flu, vaccinated patients on average spent four fewer days
                  in the hospital than those who were not vaccinated.
                </li>
              </ul>
            </div>

            <div>
              <p className="faq-bold">
                Flu vaccination can reduce the risk of flu-associated
                hospitalization.
              </p>
              <ul>
                <li>
                  Flu vaccine prevents tens of thousands of hospitalizations
                  each year. For example, during 2019-2020 flu vaccination
                  prevented an estimated 105,000 flu-related hospitalizations.
                </li>
                <li>
                  A{" "}
                  <a href="hhttps://www.cdc.gov/flu/spotlights/2017-2018/vaccine-reduces-risk-severe-illness.htm">
                    2018 study
                  </a>{" "}
                  showed that from 2012 to 2015, flu vaccination among adults
                  reduced the risk of being admitted to an ICU with flu by 82%.
                </li>
                <li>
                  A{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/28935236/">
                    2017 study
                  </a>{" "}
                  found that during 2009-2016, flu vaccines reduced the risk of
                  flu-associated hospitalization among older adults by about 40%
                  on average.
                </li>
                <li>
                  A{" "}
                  <a href="https://academic.oup.com/jid/article/210/5/674/2908613">
                    2014 study
                  </a>{" "}
                  showed that flu vaccination reduced children’s risk of
                  flu-related pediatric intensive care unit (PICU) admission by
                  74% during flu seasons from 2010-2012.
                </li>
              </ul>
            </div>

            <div>
              <p className="faq-bold">
                Flu vaccination is an important preventive tool for people with
                certain chronic health conditions.
              </p>
              <ul>
                <li>
                  Flu vaccination has been associated with{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/24150467/">
                    lower rates of some cardiac events
                  </a>{" "}
                  among people with heart disease, especially among those who
                  have had a cardiac event in the past year.
                </li>
                <li>
                  Flu vaccination can reduce the risk of a flu-related worsening
                  of chronic lung disease (for example, chronic obstructive
                  pulmonary disease (
                  <a href="https://www.ncbi.nlm.nih.gov/pubmed/28468650">
                    COPD
                  </a>
                  ) requiring hospitalization).
                </li>
                <li>
                  Among people with{" "}
                  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2809006/">
                    diabetes
                  </a>{" "}
                  and{" "}
                  <a href="http://annals.org/aim/fullarticle/712592/relation-between-influenza-vaccination-outpatient-visits-hospitalization-mortality-elderly-persons">
                    chronic lung disease
                  </a>
                  , flu vaccination has been shown in separate studies to be
                  associated with reduced hospitalizations from a worsening of
                  their chronic condition.
                </li>
              </ul>
            </div>

            <div>
              <p className="faq-bold">
                Flu vaccines can be lifesaving in children.
              </p>
              <ul>
                <li>
                  A{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/35024795/">
                    2022 study
                  </a>{" "}
                  showed that flu vaccination reduced children’s risk of severe
                  life-threatening influenza by 75%.
                </li>
                <li>
                  A{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/33020249/">
                    2020 study
                  </a>{" "}
                  found that during the 2018-2019 flu season, flu vaccination
                  reduced flu-related hospitalization by 41% and flu-related
                  emergency department visits by half among children (aged 6
                  months to 17 years old).
                </li>
                <li>
                  A{" "}
                  <a href="https://www.cdc.gov/media/releases/2017/p0403-flu-vaccine.html">
                    2017 study
                  </a>{" "}
                  was the first of its kind to show that flu vaccination can
                  significantly reduce children’s risk of dying from flu.
                </li>
              </ul>
            </div>

            <div>
              <p className="faq-bold">
                Getting vaccinated yourself may also protect people around you.
              </p>
              <p>
                Including those who are more vulnerable to serious flu illness,
                like babies and young children, older people, and people with
                certain chronic health conditions.
              </p>
            </div>

            <p>
              Despite the many benefits offered by flu vaccination, only about
              half of Americans get an annual flu vaccine. During an average flu
              season, flu can cause millions of illnesses, hundreds of thousands
              of hospitalizations and tens of thousands of deaths. Many more
              people could be protected from flu if more people got vaccinated.
            </p>
            <small>
              References for studies listed above:{" "}
              <a href="https://www.cdc.gov/flu/prevent/benefit-publications.htm">
                Publications on Influenza Vaccine Benefits
              </a>
            </small>
          </StaticAnswer>
        ),
      },
      {
        id: 8,
        question: "Can I get the flu vaccine if I'm pregnant?",
        answer: (
          <StaticAnswer>
            <p>
              Flu vaccination during pregnancy helps protect pregnant people
              from flu during and after pregnancy and helps protect their
              infants from flu in their first few months of life.
            </p>

            <ul>
              <li>
                A{" "}
                <a href="https://academic.oup.com/cid/article/58/4/449/347103">
                  2013 study
                </a>{" "}
                showed that during the 2010–2011 and 2011–2012 flu seasons
                vaccination reduced the risk of flu-associated acute respiratory
                infection in pregnant people by about{" "}
                <a href="https://www.cdc.gov/flu/highrisk/pregnant.htm#anchor_1565116373">
                  one-half
                </a>
                .
              </li>
              <li>
                A{" "}
                <a href="https://academic.oup.com/cid/article/68/9/1444/5126390">
                  2018 study
                </a>{" "}
                showed that getting a flu shot reduced a pregnant person’s risk
                of being hospitalized with flu by an average of 40% from
                2010-2016.
              </li>
              <li>
                A number of{" "}
                <a href="https://www.cdc.gov/flu/highrisk/pregnant.htm#anchor_1565116373">
                  studies
                </a>{" "}
                have shown that in addition to helping to protect pregnant
                people from flu, a flu vaccine given during pregnancy helps
                protect the baby from flu for several months after birth, when
                babies are too young to be vaccinated.
              </li>
            </ul>
          </StaticAnswer>
        ),
      },
      {
        id: 9,
        question: "How serious is the flu?",
        answer: (
          <StaticAnswer>
            <p>
              Certain people are at{" "}
              <a href="https://www.cdc.gov/flu/highrisk/index.htm">
                greater risk for serious complications
              </a>{" "}
              if they get the flu. This includes older people, young children,
              pregnant people and people with common health conditions such as
              asthma, diabetes or heart disease.
            </p>
            <p>
              The severity of flu seasons varies widely from one season to the
              next. The number of flu-associated deaths in the United States
              usually ranges from 3,000 to 49,000 deaths per year but can be
              much higher if a new strain develops to which no one is immune.
            </p>

            <p>The severity of flu season depends on many things, including:</p>

            <ul>
              <li>What flu viruses are spreading</li>
              <li>How much ful vaccine is available</li>
              <li>When the vaccine is available</li>
              <li>How many people receive the vaccine</li>
              <li>
                How well the flu vaccine is matched to flu viruses that are
                causing illness
              </li>
            </ul>
          </StaticAnswer>
        ),
      },
      {
        id: 10,
        question: "What are the complications of flu?",
        answer: (
          <StaticAnswer>
            <p>
              Complications of flu can include pneumonia, ear infections, sinus
              infections, dehydration and worsening of chronic medical
              conditions, such as congestive heart failure, asthma or diabetes.
            </p>
            <p>
              The single best way to prevent the flu is to get a flu vaccine
              each season. There are several{" "}
              <a href="https://www.cdc.gov/flu/season/faq-flu-season-2022-2023.htm">
                flu vaccine options
              </a>{" "}
              for the 2023-2024 flu season. This season, all vaccines are
              quadrivalent. The quadrivalent vaccines are made to protect
              against four flu viruses: an influenza A (H1N1) virus, an
              influenza A (H3N2) virus, and two influenza B viruses.
            </p>
          </StaticAnswer>
        ),
      },
      {
        id: 11,
        question: "When can I get the flu vaccine?",
        answer: (
          <StaticAnswer answer="Yearly flu vaccination should begin soon after flu vaccine is available and, ideally, by October. However, getting vaccinated even later can be protective, as long as flu viruses are circulating. While seasonal influenza outbreaks can happen as early as October, influenza activity most often peaks in January or later. Since it takes about two weeks after vaccination for antibodies to develop in the body that protect against influenza virus infection, it is best that people get vaccinated to be protected before influenza begins spreading in their community."></StaticAnswer>
        ),
      },
      {
        id: 12,
        question: "Who should get vaccinated?",
        answer: (
          <StaticAnswer answer='Everyone 6 months of age and older should get a flu vaccine every season. This recommendation has been in place since Feb. 24, 2010, when CDC&apos;s Advisory Committee on Immunization Practices (ACIP) voted for "universal" flu vaccination in the United States to expand protection against the flu to more people. Vaccination to prevent influenza is particularly important for people who are at high risk of serious complications from influenza.'></StaticAnswer>
        ),
      },
      {
        id: 13,
        question: "What is an influenza vaccine clinic?",
        answer: (
          <StaticAnswer>
            <p>
              The flu vaccine is offered statewide throughout flu season at many
              locations, including your doctor's office, pharmacies, grocery
              stores with pharmacies and also at numerous Department of Health
              facilities. The Department of Health offers flu vaccines to those
              who are uninsured and underinsured. Those interested in receiving
              a flu vaccine should call 1-877-PA-HEALTH (1-877-724-3258) or
              their local{" "}
              <a href="https://www.health.pa.gov/About/Pages/State%20Health%20Centers.aspx">
                state health center
              </a>{" "}
              to schedule an appointment. A parent/legal guardian must accompany
              children who are receiving the flu vaccination. Department of
              Health staff will need to be notified prior to the appointment if
              someone other than the child’s parent/legal guardian will be
              accompanying them.​
            </p>
          </StaticAnswer>
        ),
      },
      {
        id: 14,
        question: "How do I find a flu clinic in my area?",
        answer: (
          <StaticAnswer>
            <p>Try some of these flu vaccine finders:</p>
            <ul>
              <li>
                <a href="https://www.vaccines.gov/">vaccines.gov</a>
              </li>
              <li>
                <a href="http://www.lung.org/lung-disease/influenza/flu-vaccine-finder/">
                  American Lung Association Flu Clinic Finder
                </a>
              </li>
            </ul>
            <p>
              The best place to start is to consult your family physician about
              how you can receive the flu vaccine. For more information
              regarding flu vaccine availability for High Risk Individuals,
              please call 1-877-PA-HEALTH.​
            </p>
          </StaticAnswer>
        ),
      },
    ],
  },
  {
    title: "COVID",
    content: [
      {
        id: 16,
        question:
          "If I already had COVID-19 and recovered, do I still need to get a COVID-19 vaccine?",
        answer: (
          <StaticAnswer answer="Yes, you should get an updated COVID-19 vaccine even if you’ve already had and recovered from COVID-19. People who already had COVID-19 and do not get vaccinated after their recovery are more likely to get COVID-19 again than those who get vaccinated after their recovery."></StaticAnswer>
        ),
      },
      {
        id: 17,
        question:
          "Why should children and teens get vaccinated against COVID-19?",
        answer: (
          <StaticAnswer answer="COVID-19 can make children and teens very sick and sometimes requires treatment in a hospital. Getting children and teens vaccinated against COVID-19 can help keep them from getting really sick if they do get COVID-19, including protecting them from short and long-term complications and hospitalization."></StaticAnswer>
        ),
      },
      {
        id: 18,
        question:
          "Are COVID-19 vaccines safe even though the vaccines were developed rapidly?",
        answer: (
          <StaticAnswer answer="Although COVID-19 vaccines were developed quickly, research and development on vaccines like these has been underway for decades. All vaccine development steps were taken to ensure COVID-19 vaccine safety and effectiveness, including clinical trials, authorization and approval, and tracking safety using vaccine monitoring systems."></StaticAnswer>
        ),
      },
      {
        id: 19,
        question: "What are the ingredients in the COVID-19 vaccine?",
        answer: (
          <StaticAnswer answer="Vaccine ingredients vary by manufacturer. None of the vaccines contain eggs, gelatin, latex, or preservatives."></StaticAnswer>
        ),
      },
      {
        id: 20,
        question: "Why should I get vaccinated if I might get COVID-19 anyway?",
        answer: (
          <StaticAnswer answer="COVID-19 vaccines are working well to prevent severe illness, hospitalization, and death. Compared to people who are up to date with their COVID-19 vaccinations, unvaccinated people are more likely to get COVID-19, much more likely to be hospitalized with COVID-19, and much more likely to die from COVID-19."></StaticAnswer>
        ),
      },
      {
        id: 21,
        question:
          "If I am pregnant or planning to become pregnant, can I receive a COVID-19 vaccine?",
        answer: (
          <StaticAnswer>
            <p>
              Yes, COVID-19 vaccination is recommended for people who are
              pregnant, breastfeeding, or trying to get pregnant now, as well as
              people who might become pregnant in the future.
            </p>
            <p>
              People who get a COVID-19 infection during pregnancy are more
              likely to deliver a preterm (born earlier than 37 weeks of
              pregnancy) or stillborn infant and may also be more likely to have
              other pregnancy complications.
            </p>
          </StaticAnswer>
        ),
      },
      {
        id: 22,
        question: "Can I get more than one updated COVID-19 vaccine?",
        answer: (
          <StaticAnswer answer="People who are moderately or severely immunocompromised may get additional doses of updated COVID-19 vaccine 2 or more months after getting the last updated COVID-19 vaccine."></StaticAnswer>
        ),
      },
      {
        id: 23,
        question: "What COVID-19 vaccines are currently available?",
        answer: (
          <StaticAnswer>
            <p>
              Pfizer-BioNTech and Moderna vaccines, which are mRNA vaccines, and
              the Novavax vaccine, which is a protein subunit vaccine.{" "}
            </p>
            <p>
              None of the COVID-19 vaccines affect or interact with our DNA.
            </p>
          </StaticAnswer>
        ),
      },
      {
        id: 24,
        question:
          "How many doses are required for the updated fall 2023 COVID-19 vaccine?",
        answer: (
          <StaticAnswer>
            <p>For adults, Moderna and Pfizer are a single dose.</p>

            <p>
              For children 5 and younger, Moderna is a two-dose series and
              Pfizer is a three-dose series.
            </p>
            <p>
              For moderately or severely immunocompromised adults, additional
              doses may be recommended, and people who fall into these
              categories should discuss COVID-19 dosing with their primary care
              provider.
            </p>
          </StaticAnswer>
        ),
      },
      {
        id: 25,
        question: "Is the new COVID-19 vaccine a booster? ",
        answer: (
          <StaticAnswer>
            <p>
              The updated Moderna and Pfizer COVID-19 vaccines use the XBB
              strain of Omicron as the targeted virus for the new formulation.
              The XBB strain has been widely circulating for most of 2023.
            </p>

            <p>
              While the updated vaccine is not technically considered a booster,
              it may be referred to as a booster in media reports and elsewhere.
              However, we foresee the COVID vaccine becoming an annual vaccine,
              just like the flu vaccine.
            </p>
          </StaticAnswer>
        ),
      },
      {
        id: 26,
        question:
          "Is there an efficacy difference between the COVID-19 vaccines?",
        answer: (
          <StaticAnswer answer="All of the available COVID-19 vaccines have shown similar efficacy in studies."></StaticAnswer>
        ),
      },
      {
        id: 27,
        question:
          "Can I get the updated COVID-19 vaccine if I have never been vaccinated for COVID before?",
        answer: (
          <StaticAnswer answer="Yes. Prior COVID vaccination is not an eligibility requirement."></StaticAnswer>
        ),
      },
    ],
  },
];
