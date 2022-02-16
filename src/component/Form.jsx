import React, { useState, useEffect } from 'react';
import styles from './Form.module.css';

const Form = () =>
{
  const [name, setName] = useState("LetEndorse");
const [business_idea, setBusiness_idea] = useState("It is an online ecosystem of social innovators, NGOs and communities")
//Sgate of busines
const [business_stage, setBusiness_stage] = useState("")
const [age_of_establishment, setAgeOfEstablishment] = useState(0);
//Primary products/services offered and offered to
const [primary_product_service_offered, setPrimaryProduct_service] = useState("");
const [offered_to, setOfferedTo] = useState("");
//Secondary products/services offered
const [secondary_product_service_offered, setSecondaryProductService] = useState(null);
//Processed products/services
const [processed_products, setProcessedProduct] = useState(null);
//Relevant exprience
const [relevant_experience, setRelevantExperience] = useState(0);
//Skil training
const [skill_training, setSkillTraining] = useState("No formal skill training")
const [usp, setUsp] = useState([])
const handleUsp = (e) => {
  const {value, checked}  = e.target;
  if(checked) {
    setUsp([...usp, value])
  } else {
    setUsp(usp.filter((e) => e !== value))
  }
}

//Location
//Establioshment type, name of the area , Locality of business, Ownership of infrustructure
const [establishment_type, setEstablishmentType] = useState("");
const [business_area, setBusinessArea] = useState("");
const [business_locality, setBusinessLocality] = useState("");
const [infra_ownership, setInfraOwnership] = useState("");

//Establishment area
  const [establishment_area, setEstablishmentArea] = useState(0);
//Reasons for location
const [reason_for_location, setReasonForLocation] = useState([]);
const handleReason = (e) => {
  const {value, checked} = e.target;
  if(checked) {
    setReasonForLocation([...reason_for_location, value])
  } else {
    setReasonForLocation(reason_for_location.filter((e) => e !== value))
  }
}

//Market research
  const [market_research, setMarketResearch] = useState("Not conducted");
//Primary market 
const [primary_market, setPrimaryMarket] = useState("");
//customers
const [customers, setCustomers] = useState("");
//seasonality
  const [seasonality, setSeasonality] = useState("");
//competition
const [competition, setCompetition] = useState("");
//Suppliers
const [suppliers, setSuppliers] = useState("");
//Marketing avenuesa
const [marketing_avenues, setMarketing] = useState([]);
const handleAvenue = (e) => {
  const {checked, value} = e.target;
  if(checked) {
    setMarketing([...marketing_avenues, value])
  } else {
    setMarketing(marketing_avenues.filter((e) => e !== value))
  }
}

//Handle scaleup
const [scaleup_potential, setScaleupPotential] = useState([]);
  const handleScaleup = (e) =>
  {
    const {checked, value} = e.target;
    if(checked)
    {
      setScaleupPotential([...scaleup_potential, value])
    } else
    {
      setScaleupPotential(scaleup_potential.filter((e) => e !== value))
    }
  };


  return (
    <>
        <div className = "">


       {/* introduction */}
       <div className = {styles.introduction}>
         <legend>Introduction</legend>
              <div>
            <div className={styles.business_stage}>
                    
                    <label>Stage of business:- </label>
                    <select onChange = {(e) => setBusiness_stage(e.target.value)}>
                      <option value = "Start-up">Start-up</option>
                      <option value = "Scale-up">Scale-up</option>
                    </select>
                  </div>
            <div className={styles.business_stage_show}>
                    <p> {name} is looking to {business_stage} of {business_idea}</p>
                  </div>
              </div>


              <div>
            <div className={styles.age_of_establishment}>
                  <label>Age of establishment(years):- </label>
                  <input type = "number" min = "0" max = "100" onChange = {(e) => setAgeOfEstablishment(e.target.value)} value = {age_of_establishment} />

                </div>
            <div className={styles.age_of_establishment_show}>
                  {
                    age_of_establishment !== 0 ? (
                      <p>This enterprise has been operational since {age_of_establishment} years and has been serving its customers since then.</p>
                    ) : ("")
                  }
                </div>
              </div>

                <div>
                  <div>
              <div className={styles.primary_product_service_offered}>
                      <label>
                        Primary Products/Services offered:- 
                      </label><br />
                      <input value = {primary_product_service_offered} onChange = {(e) => setPrimaryProduct_service(e.target.value)} type  = "text" />

                    </div><br />
              <div className={styles.offered_to}>
                    <label>Offered to:- </label>
                    <select onChange = {(e) => setOfferedTo(e.target.value)}>
                      <option value = "End customers">End Customers</option>
                      <option value = "Wholesalers">Wholesalers</option>
                      <option value = "Distributors">Distributors</option>
                      <option value = "Retailers">Retailers</option>
                    </select>
                    </div>
                    </div>
                    <div>
                      <p>This establishment offers products/services like- {primary_product_service_offered} to {offered_to}.</p>
                    </div>
                </div>


                  <div>

            <div className={styles.secondary_product_service_offered}>
                    <label>
                        Secondary Products/Services offered:- 
                      </label><br />
                      <input type  = "text" value = {secondary_product_service_offered} onChange = {(e) => setSecondaryProductService(e.target.value)}/>
                    </div>
                    <div>
                      {
                        secondary_product_service_offered === null ? (
                          ""
                        ) : (
                      <p>In addition, the enterprise shall also be involved in- {secondary_product_service_offered}</p>

                        )
                      }
                    </div>
                </div>



              <div>
            <div className={styles.processed_products}>
                <label>
                    Processed products:- 
                  </label><br />
                  <input value = {processed_products} onChange = {(e) => setProcessedProduct(e.target.value)} type  = "text" />
                </div>
                <div>
                      {
                        processed_products === null ? (
                          ""
                        ) : (
                          <p>Other products of the enterprise shall include- {processed_products}</p>
                        )
                      }
                </div>
              </div>



              <div>
            <div className={styles.relevant_experience}>
                  <label>Years of relevant experience in this field:- </label>
                  <input value = {relevant_experience} onChange = {(e) => setRelevantExperience(e.target.value)} type = "number"/>
                </div>
                <div>
                  {
                    relevant_experience === 0 ? (
                      ""
                    ) : (
                      <p>{name} has relevant experience of {relevant_experience} years in this field.</p>
                    )
                  }
                </div>
              </div>


              <div>
            <div className={styles.skill_training}>
                  <label>Skil training:- </label>
                  <select onChange = {(e) => setSkillTraining(e.target.value)}>
                    <option value = "No formal skill training">No formal skill training</option>
                    <option value = "Has formal skill training and certificate">Has formal skill training and certificate</option>
                  </select>
                </div>
                <div>
                  {
                    skill_training === "No formal skill training" ? (
                      ""
                    ) : (
                      <p>The entrepreneur {skill_training} in this field or work.</p>
                    )
                  }
                </div>
              </div>


              <div>
            <div className={styles.usp}>
                  <label>Unique Selling Proposition:- </label> <br />
                  <span><input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "the entrepreneur's experience in this field" /> <label>The entrepreneur's experience in this field.</label></span><br />
                  <span><input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "innovative product/service" /><label>innovative product/service.</label></span><br />
                  <span><input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "high profit margin" /><label>High profit margin</label> </span><br />
                  <span><input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "high growth potential" /> <label>High growth potential</label></span><br />
                  <span><input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "superior customer support" /><label>Superior customer support</label></span><br />
                  <span><input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "quality and affordable products/service" /><label>Quality and affordable products/service</label></span><br />
                  <span><input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "high demand in the target market (forward linkage)" /> <label>High demand in the target market (forward linkage).</label></span><br />
                  <span><input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "abundant supply of raw materials (backward linkage)" /> <label>Abundant supply of raw materials (backward linkage).</label></span><br />
                  <span><input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "wide range of products/services" /> <label>Wide range of products/services.</label></span><br />
                  <span><input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "robust value-chain of the business" /> <label>robust value-chain of the business</label></span><br />
                  <span><input type = "checkbox" onChange = {(e) => handleUsp(e)} value = "frequencyy of customer visits" /> <label>Frequency of customer visits</label></span><br />

                </div>
                <div>
                  <p>The enterprise is uniquely positioned because of it's - 
                    {
                      usp.join(", ")
                    }
                  </p>
                </div>
              </div>
        </div>
        {/* End introduction */}
                    <br /><br />
        {/* Start Location */}
        <div className={styles.Location}>
         <legend>Location</legend>

            <div>
              <div>
              <div className={styles.establishment_type}>
                  <label>Establishment type:- </label>
                  <select onChange = {(e) =>setEstablishmentType(e.target.value)}>
                    <option value = "Factory">Factory</option>
                    <option value = "Mill">Mill</option>
                    <option value = "Stall">Stall</option>
                    <option value = "Workshop">Workshop</option>
                    <option value = "Boutique">Boutique</option>
                    <option value = "Vehicle">Vehicle</option>
                    <option value = "Centre">Centre</option>
                    <option value = "Store">Store</option>
                    <option value = "Farm">Farm</option>
                    <option value = "Plant">Plant</option>
                    <option value = "Processing Unit">Processing Unit</option>
                    <option value = "Shop">Shop</option>
                    <option value = "Vending cart">Vending cart</option>
                    <option value = "Manufacturing unit">Manufacturing unit</option>
                  </select>
              </div>
              <br />
              <div className={styles.business_area}>
                  <label>Name of the area:- </label><br />
                  <input value = {business_area} onChange = {(e) => setBusinessArea(e.target.value)} type = "text" />
              </div>
              <br />
              <div className={styles.business_locality}>
                  <label>Locality of business:- </label>
                  <select onChange = {(e) => setBusinessLocality(e.target.value)}>
                    <option value = "Urban">Urban</option>
                    <option value = "Rural">Rural</option>
                    <option value = "Semi-urban">Semi-urban</option>
                    <option value = "Slum">Slum</option>
                    </select>
              </div>
              <br />
              <div className={styles.infra_ownership}>
                  <label>Ownership of infrastructure:-  </label>
                  <select onChange = {(e) => setInfraOwnership(e.target.value)}>
                    <option value = "Rented">
                      Rented
                    </option>
                    <option value = "Leased">
                      Leased
                    </option>
                    <option value = "Self-owned">
                      Self-owned
                    </option>
                  </select>

                </div>
              </div>
              <div>
                    <p>The {establishment_type} is located in {business_locality} area of {business_area} in a {infra_ownership} property.</p>
              </div>
            </div>


            <div>
            <div className={styles.establishment_area}>
                <label>Establishment area :- </label>
                <input value = {establishment_area} onChange = {(e) => setEstablishmentArea(e.target.value)} type = "number" />
              </div>
              <div>
                  {
                    establishment_area === 0 ? (
                      ""
                    ) : (
                      <p>The size of the establllishment is {establishment_area} sq.ft.</p>
                    )
                  }
              </div>
            </div>

            <div>
            <div className={styles.reason_for_location}>
                <label>Reason for selecting this location :- </label> <br />
                <span><input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Nearness to market" /> <label>Nearness to market</label></span><br />
                <span><input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Good footfall" /> <label>Good footfall.</label></span><br />
                <span><input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Nearness to source of raw materials" /><label>Nearness to source of raw materials.</label> </span><br />
                <span><input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Nearness to targeted customer demographics" /><label>Nearness to targeted customer demographics.</label></span><br />
                <span><input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Lesser competition around" /><label>Lesser competition around</label></span><br />
                <span><input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Access to permit/license of operate" /> <label>Access to permite/license of operate</label></span><br />
                <span><input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Nearness to suppliers" /><label>Nearness to suppliers.</label></span><br />
                <span><input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Affordability (rent)" /><label>Affordability (rent).</label></span><br />
                <span><input type = "checkbox" onChange = {(e) => handleReason(e)} value = "No rental overheads" /><label>No rental overheads.</label></span><br />
                <span><input type = "checkbox" onChange = {(e) => handleReason(e)} value = "Other such factors" /> <label>Other such factors.</label></span>

              </div>
              <div>
                <p>
                  This locality is selected because of :- 
                    {
                      reason_for_location.join(", ")
                    }
                </p>
              </div>
            </div>
        </div>
        {/* End Location */}


<br /><br />


          {/* Target market */}
        <div className={styles.market}>
          <legend>Target Market</legend>
          <div>
            <div className={styles.market_research}>
              <label>Market research:- </label>
              <select onChange = {(e) => setMarketResearch(e.target.value)}>
                <option value = "Not conducted">Not conducted</option>
                <option value = "Market research has been conducted">Market research has been conducted</option>
              </select>
            </div>
            <div>
                    {
                      market_research === "Not conducted" ? (
                        ""
                      ) : (
                        <p>
                          {market_research} and the range of products and target market has een identified after that.
                        </p>
                      )
                    }
            </div>
          </div>


          <div>
            <div className={styles.primary_market}>
              <label>Primary market:- </label>
              <select onChange = {(e) => setPrimaryMarket(e.target.value)}>
                <option value = "Local">Local</option>
                <option value = "Regional">Regional</option>
                <option value = "National">National</option>
                <option value = "International">International</option>
              </select>
            </div>
            <div>
                    <p>
                      The enterprise shall focus on offering it's products/services to {primary_market} markets.
                    </p>
            </div>
          </div>



          <div>
            <div className={styles.customers}>
              <label>Customers :- </label><br />
              <input value = {customers} onChange = {(e) => setCustomers(e.target.value)} type = "text" />
            </div>
            <div>
                    <p>
                      Our costumers shall include- {customers}
                    </p>
            </div>
          </div>

          <div>
            <div className={styles.seasonality}>
              <label>Seasons of high sales :- </label>
              <select onChange = {(e) => setSeasonality(e.target.value)}>
                <option value = "Consistent sales across all seasons">Consistent sales across all seasons.</option>
                <option value = "Higher sales in festive seasons">Higher sales in festive seasons</option>
                <option value = "High sales in cropping/cultivation season">High sales in cropping/cultivation season.</option>
                <option value = "High sales in peak seasons">High sales in peak seasons</option>
              </select>
            </div>
            <div>
              <p>
                The nature of the business is such that we expect {seasonality}.
              </p>
            </div>
          </div>

          <div>
            <div className={styles.competition}>
              <label>Competition:- </label>
              <select onChange = {(e) => setCompetition(e.target.value)}>
                <option value = "No similar goods/service provider in this locality">No similar goods/service provider in this locality.</option>
                <option value = "Only a few similar goods/service providers in this locality">Only a few similar goods/service providers in this locality.</option>
                <option value = "Many similar goods/service providers in this locality">Many similar goods/service providers in this locality.</option>
              </select>
            </div>
            <div>
                    <p>
                      Regarding competiton , there are {competition}.
                    </p>
            </div>
          </div>
        
          <div>
            <div className={styles.suppliers}>
              <label>List of Suppliers:- </label><br />
              <input value = {suppliers} onChange = {(e) => setSuppliers(e.target.value)}type = "text" />
            </div>
            <div>
              <p>
                The enterprise shall procure goods/raw materisls from {suppliers}.
              </p>
            </div>
          </div>

          <div>
            <div className={styles.marketing_avenues}>
              <label>Marketing avenues:- </label><br />
              <span><input type = "checkbox" onChange = {(e) => handleAvenue(e)} value = "distribution of marketing material (pamphlets/flyers)" /> <label>Distribution of marketing material(pamphelets/flyers).</label></span><br />
              <span><input type = "checkbox" onChange = {(e) => handleAvenue(e)} value = "storefront/business branding" /> <label>storefront/business branding</label></span><br />
              <span><input type = "checkbox" onChange = {(e) => handleAvenue(e)} value = "Seasonal discounts and offers" /> <label>Seasonal discounts and offers.</label></span><br />
              <span><input type = "checkbox" onChange = {(e) => handleAvenue(e)} value = "Cross-promotion" /><label>cross-promotion</label></span><br />
              <span><input type = "checkbox" onChange = {(e) => handleAvenue(e)} value = "Digital Marketing" /><label>Digital Marketing</label></span><br />
              <span><input type = "checkbox" onChange = {(e) => handleAvenue(e)} value = "Word of mouth" /><label>Word of Mouth</label></span>
            </div>
            <div>
              <p>Our marketing avenues to reach the targeted customers shall inclde - {marketing_avenues.join(", ")}</p>
            </div>
          </div>
        {/* End of Target market */}
     </div>
<br /><br />
          <div>
            <div className={styles.scaleup_potential}>
              <legend>Scaling up potential</legend>
              <div>
                <div>
                  <label>Avenues of scaling up in the future:- </label><br />
                  <span><input type = "checkbox" onChange = {(e) => handleScaleup(e)} value = "increasing the variety of product/service offering" /> <label>increasing the variety of product/service offering</label></span><br />
                  <span><input type = "checkbox" onChange = {(e) => handleScaleup(e)} value = "expanding the current offering to other geographies" /> <label>expanding the current offering to other geographies</label></span><br />
                  <span><input type = "checkbox" onChange = {(e) => handleScaleup(e)} value = "opening more outlets" /> <label>opening more outlets</label></span><br />
                  <span><input type = "checkbox" onChange = {(e) => handleScaleup(e)} value = "growing the scale of operation" /> <label>growing the scale of operation</label></span><br />
                  <span><input type = "checkbox" onChange = {(e) => handleScaleup(e)} value = "building value-chain integrations" /> <label>building value-chain integrations</label></span><br />
                  <span><input type = "checkbox" onChange = {(e) => handleScaleup(e)} value = "other allied revenue streams" /> <label>other allied revenue streams.</label></span>
                </div>
                <div>
                      <p>
                        The various forseeable avenues of scaling up and growing the business in the foreseeable future include- {scaleup_potential.join(", ")}.
                      </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className={styles.showData}></div>
    </>
  )
}
export {Form}