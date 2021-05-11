import React, { useEffect } from 'react'
// import { Link } from 'gatsby'
import { LayoutLogin } from '../../Layout'

import { InputText, Phone, SelectCreateMulti, SelectSingle } from '../../Forms'

const initialState = {
  full_name: '',
  email: '',
  phone_number: '',
  address_1: '',
  address_2: '',
  city: '',
  state: '',
  zip_code: '',
  country: '',
  current_employer: '',
  facebook: '',
  instagram: '',
  linkedin: '',
  twitter: '',
  expertises: [],
  skills: [],
  regional_experience: [],
  your_story: ''
}


class Step3 extends React.Component {
  state = initialState
  render() {
    let { fields } = this.props;
    let skills=[];
    let expertises=[];
    let countries=[];
    let states=[];
    let experienceList=[];
if(fields.step_2.getcountry.length>0)
{
  countries=fields.step_2.getcountry;
}else
{
  countries=[{ key: 'm',id:'1', text: 'India', value: 'India' },
    { key: 'f',id:'2', text: 'France', value: 'France' },
    { key: 'o',id:'3', text: 'US', value: 'US' },
    ]
}
    if(fields.step_2.getexpertise.length>0)
    {
      expertises=fields.step_2.getexpertise;
    }else
    {
  expertises=[
  { key: 'm',id:'1', text: 'Mechanical', value: 'Mechanical' },
  { key: 'f', id:'2',text: 'IT', value: 'IT' },
  { key: 'o', id:'3',text: 'Other', value: 'Others' },
]
    }

    if(fields.step_2.getstate.length>0)
    {
      states=fields.step_2.getstate;
    }else
    {
      states=[
        { key: 'm',id:'1', text: 'Delhi', value: 'Delhi' },
        { key: 'f', id:'2',text: 'Punjab', value: 'Punjab' },
        { key: 'o',id:'3', text: 'Haryana', value: 'Haryana' },
      ]
    }

    if(fields.step_2.getskills.length>0)
    {
      skills=fields.step_2.getskills;
    }else
    {
skills=[
  { key: 'm', id:'1',text: 'IT', value: 'IT' },
  { key: 'f', id:'2', text: 'Development', value: 'Development' },
  { key: 'o', id:'3', text: 'Testing', value: 'Testing' },
]
    }

    if(fields.step_2.getsexperiencelist.length>0)
    {
      experienceList=fields.step_2.getsexperiencelist;
    }else
    {
      experienceList=[
        { key: 'm', id:'1',text: 'IT', value: 'IT' },
        { key: 'f', id:'2', text: 'Development', value: 'Development' },
        { key: 'o', id:'3', text: 'Testing', value: 'Testing' },
      ]
    }

    //handle dropdowns
   const handleDropDownCountry = event => {
      event.persist();
      let item_name = event.target.textContent;
      console.log(item_name);
      if(item_name==="")
      {
        fields.step_3.country={};
      }else
      {
        fields.step_3.country={};
        let countryItem= countries.filter(x=>x.value===item_name);
        if(countryItem.length>0)
        {
          fields.step_3.country={ id:countryItem[0].key,name:countryItem[0].text };
        }


      }


    };
    const  handleDropDownState = event => {
      event.persist();
      let item_name = event.target.textContent;
      console.log(item_name);
      if(item_name==="")
      {
        fields.step_3.state= {};
      }else
      {
        fields.step_3.state= {};
        let stateItem= states.filter(x=>x.value===item_name);
        if(stateItem.length>0)
        {
          fields.step_3.state={ id:stateItem[0].key,name:stateItem[0].text };
        }

      }
    };
    const  handleDropDownExpertise = event => {
      event.persist();
      let item_name = event.target.textContent;
      console.log(item_name);
      if(item_name==="")
      {
        let index=  fields.step_3.expertises.findIndex(x=>x.name===event.target.parentNode.textContent);
        // var index =  fields.step_3.expertises.indexOf(event.target.parentNode.textContent);
        if (index !== -1) {
          fields.step_3.expertises.splice(index, 1);
        }
      }else
      {
        let expertiseItem=  expertises.filter(x=>x.value===item_name);
        if(expertiseItem.length>0)
        {
          fields.step_3.expertises.push({ id:expertiseItem[0].key,name:expertiseItem[0].text });
        }
      }


    };
    const  handleDropDownSkills = event => {
      event.persist();
      let item_name = event.target.textContent;
      console.log(item_name);
      if(item_name==="")
      {
        let index=  fields.step_3.skills.findIndex(x=>x.name===event.target.parentNode.textContent);
        // var index =  fields.step_3.skills.indexOf(event.target.parentNode.textContent);
        if (index !== -1) {
          fields.step_3.skills.splice(index, 1);
        }
      }else
      {
        let skillitem=  skills.filter(x=>x.value===item_name);
if(skillitem.length>0)
{
  fields.step_3.skills.push({ id:skillitem[0].key,name:skillitem[0].text });
}

      }
    };
    const  handleDropDownExperience = event => {
      event.persist();
      let item_name = event.target.textContent;
      console.log(item_name);
      if(item_name==="")
      {
        let index=  fields.step_3.regional_experience.findIndex(x=>x.name===event.target.parentNode.textContent);

        // var index =  fields.step_3.regional_experience.indexOf(event.target.parentNode.textContent);
        if (index !== -1) {
          fields.step_3.regional_experience.splice(index, 1);
        }
      }else
      {
        let experienceitem=  experienceList.filter(x=>x.value===item_name);
        if(experienceitem.length>0)
        {
          fields.step_3.regional_experience.push({ id:experienceitem[0].key,name:experienceitem[0].text });
        }

      }
    };




    return (
      <LayoutLogin>
        <div className="mx-auto max-w-screen-lg">
          <h2 className="mb-4">Application: About You</h2>
          <p className="text-gray-light font-medium text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum mi non eleifend mollis. Nam ut elit dignissim odio auctor ultrices. Cras feugiat pulvinar tellus. Phasellus nec maximus antorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="flex flex-col p-7 md:py-10 md:px-16 bg-gray-darker rounded mt-10  border border-blue">

            <div className="">
              <h3 className="font-semibold mt-5 text-md mb-5 text-gray-light">Personal Information</h3>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap">
              <div className="md:w-1/2 md:pr-5">
                <InputText
                  handleUpdate={this.props.handleUpdate}
                  label={"First Name"}
                  name={"first_name"}
                  value={fields.step_3.first_name}
                  id={"first_name"}
                  placeholder={"First Name"}
                  autoComplete={"on"}
                  errorContent={this.props.fields.step_3.first_nameerror}
                  />
              </div>
              <div className="md:w-1/2 md:pl-5">
              <InputText
                  handleUpdate={this.props.handleUpdate}
                  label={"Last Name"}
                  name={"last_name"}
                  value={fields.step_3.last_name}
                  id={"last_name"}
                  placeholder={"Last Name"}
                  autoComplete={"on"}
                  errorContent={this.props.fields.step_3.last_nameerror}
                  />
              </div>
              <div className="md:w-1/2 md:pr-5">
                <Phone
                  handleUpdate={this.props.handleUpdate}
                  phone_number={this.props.fields.step_1.phone_number}
                  autoComplete="off"
                  errorContent={this.props.fields.step_3.phone_numbererror}
                />
              </div>
              <div className="md:w-1/2 md:pl-5">
                <InputText
                  handleUpdate={this.props.handleUpdate}
                  label={"Address 1"}
                  name={"address_1"}
                  value={fields.step_3.address_1}
                  id={"address_1"}
                  placeholder={"Street Name & #"}
                  autoComplete={"on"}
                  errorContent={this.props.fields.step_3.address_1error}
                  />
              </div>
              <div className="md:w-1/2 md:pr-5">
                <InputText
                  handleUpdate={this.props.handleUpdate}
                  label={"Address 2"}
                  name={"address_2"}
                  value={fields.step_3.address_2}
                  id={"address_2"}
                  placeholder={"Street name & #"}
                  autoComplete={"on"}
                  errorContent={this.props.fields.step_3.address_2error}
                  />
              </div>
              <div className="md:w-1/2 md:pl-5">
              <InputText
                  handleUpdate={this.props.handleUpdate}
                  label={"City"}
                  name={"city"}
                  value={fields.step_3.city}
                  id={"city"}
                  placeholder={"City"}
                  autoComplete={"on"}
                  errorContent={this.props.fields.step_3.cityerror}
                  />
              </div>
              <div className="md:w-1/2 md:pr-5">

                <SelectSingle
                  handleUpdate={handleDropDownState}
                  label={"State"}
                  name={"state"}
                  value={fields.step_3.state}
                  id={"state"}
                  placeholder={"State"}
                  autoComplete={"on"}
                  errorContent={this.props.fields.step_3.stateerror}
                  options={states}
                />
              </div>
              <div className="md:w-1/2 md:pl-5">
                <InputText
                  handleUpdate={this.props.handleUpdate}
                  label={"Zip Code"}
                  name={"zip_code"}
                  value={fields.step_3.zip_code}
                  id={"zip_code"}
                  placeholder={"Postal Code"}
                  autoComplete={"on"}
                  errorContent={this.props.fields.step_3.zip_codeerror}

                  />
              </div>
              <div className="md:w-1/2 md:pr-5">

                <SelectSingle
                  handleUpdate={handleDropDownCountry}
                  label={"Country"}
                  name={"country"}
                  value={fields.step_3.country}
                  id={"country"}
                  placeholder={"Country"}
                  autoComplete={"on"}
                  errorContent={this.props.fields.step_3.countryerror}
                  options={countries}
                />
              </div>

              <div className="md:w-1/2 md:pl-5">
                <InputText
                    handleUpdate={this.props.handleUpdate}
                    label={"Current Employer"}
                    name={"current_employer"}
                    value={fields.step_3.current_employer}
                    id={"current_employer"}
                    placeholder={"Employer"}
                    autoComplete={"on"}

                    />
              </div>

            </div>

            <div className="">
              <h3 className="font-semibold mt-5 text-md mb-5 text-gray-light">Social Media</h3>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap">
              <div className="md:w-1/2 md:pr-5">
              <InputText
                handleUpdate={this.props.handleUpdate}
                label={"Facebook"}
                name={"facebook"}
                value={fields.step_3.facebook}
                id={"facebook"}
                placeholder={"Facebook Profile URL"}
                autoComplete={"on"}
                errorContent={this.props.fields.step_3.facebookerror}
                />
              </div>

              <div className="md:w-1/2 md:pl-5">
              <InputText
                  handleUpdate={this.props.handleUpdate}
                  label={"Instagram"}
                  name={"instagram"}
                  value={fields.step_3.instagram}
                  id={"instagram"}
                  placeholder={"Instagram Profile URL"}
                  autoComplete={"on"}
                  errorContent={this.props.fields.step_3.instagramerror}
                  />
              </div>

              <div className="md:w-1/2 md:pr-5">
                <InputText
                handleUpdate={this.props.handleUpdate}
                label={"Linkedin"}
                name={"linkedin"}
                value={fields.step_3.linkedin}
                id={"linkedin"}
                placeholder={"Linkedin Profile URL"}
                autoComplete={"on"}
                errorContent={this.props.fields.step_3.linkedinerror}
                />
              </div>

              <div className="md:w-1/2 md:pl-5">
                <InputText
                handleUpdate={this.props.handleUpdate}
                label={"Twitter"}
                name={"twitter"}
                value={fields.step_3.twitter}
                id={"twitter"}
                placeholder={"Twitter Profile URL"}
                autoComplete={"on"}
                errorContent={this.props.fields.step_3.twittererror}
                />
              </div>
            </div>

            <div className="">
              <h3 className="font-semibold mt-5 text-md mb-5 text-gray-light">Expertise, Skills & Regional Experience</h3>
            </div>

            <div className="flex flex-col md:flex-row flex-wrap">
              <div className="md:w-1/2 md:pr-5">
                <SelectCreateMulti
                label={"Expertises"}
                name={"expertises"}
                id={"expertises"}
                value={fields.step_3.expertises}
                placeholder={"Select multiple options"}
                options={expertises}
                handleUpdate={handleDropDownExpertise}
                errorContent={this.props.fields.step_3.expertiseserror}
                />
              </div>

              <div className="md:w-1/2 md:pl-5">
              <SelectCreateMulti
                label={"Skills"}
                name={"skills"}
                id={"skills"}
                value={fields.step_3.skills}
                placeholder={"Select multiple options"}
                options={skills}
                handleUpdate={handleDropDownSkills}
                errorContent={this.props.fields.step_3.skillserror}
              />

              </div>

              <div className="md:w-1/2 md:pr-5">
              <SelectCreateMulti
                label={"Regional Experience"}
                name={"regional_experience"}
                id={"regional_experience"}
                value={fields.step_3.regional_experience}
                placeholder={"Select multiple options"}
                options={[
                  { key: 'm', text: 'mechanical', value: 'mechanical' },
                  { key: 'f', text: 'IT', value: 'IT' },
                  { key: 'o', text: 'Test', value: 'Test' },
                        ]}
                handleUpdate={handleDropDownExperience}
                errorContent={this.props.fields.step_3.regional_experienceerror}
              />
              </div>
              <div className="md:w-1/2 md:pl-5"></div>

            </div>

            <div className="">
              <h3 className="font-semibold mt-5 text-md mb-5 text-gray-light">Your Story</h3>
            </div>

            <div>
            <div className="w-full">
                <InputText
                handleUpdate={this.props.handleUpdate}
                label={"Tell us about you"}
                name={"your_story"}
                value={fields.step_3.your_story}
                id={"your_story"}
                placeholder={"Type here"}
                errorContent={this.props.fields.step_3.your_storyerror}
                />
              </div>
            </div>

          </div>

          <div className="flex flex-col px-7 md:px-16 bg-gray-darker rounded mt-10 max-h-64 overflow-scroll">
            <h3 className="pt-10 pb-2  top-0 bg-gray-darker">Terms & Conditions</h3>
            <div className="text-tc mb-10">
              <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum mi non eleifend mollis. Nam ut elit dignissim odio auctor ultrices. Cras feugiat pulvinar tellus. Phasellus nec maximus ante. Aliquam erat volutpat. Sed mauris erat, congue quis nisl ac, maximus posuere arcu. Vivamus elementum vestibulum vestibulum. Etiam vestibulum ac libero ut blandit. Suspendisse potenti. Maecenas vel eros dictum, gravida erat eu, ornare est. Nulla efficitur metus convallis tempor molestie. Maecenas nec laoreet lectus, at finibus tellus.</p>
              <p>2. Pellentesque eu risus vulputate, sagittis mi at, consequat quam. Sed et finibus dui. Nulla massa tortor, fringilla ut eros sit amet, malesuada lacinia lectus. Aliquam erat volutpat. Suspendisse ut pharetra ligula, et fringilla magna. Duis eget semper leo. Nunc nec dui sit amet erat hendrerit ultrices sed eget tortor. Nam pretium elementum luctus. In id dui ante. Quisque bibendum enim eget lectus gravida molestie. Vestibulum rhoncus dui at enim imperdiet lacinia. Etiam eros velit, tincidunt interdum dui ac, interdum porta odio. Fusce vulputate, justo quis venenatis vestibulum, massa ipsum feugiat nisi, quis maximus justo purus in turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante justo, ullamcorper gravida nunc sit amet, tincidunt eleifend sem. Maecenas vitae lectus nec erat posuere placerat nec quis libero.</p>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center mt-10 mb-2">
            <input type="checkbox" className="mr-3 checkbox"/>
            <label className="font-semibold">I agree with the Terms & Conditions</label>
          </div>


        <button
        onClick={(e) => this.props.validate(e)}
        className="btn bg-red w-full mt-10">
        {this.props.loading ? null : 'Submit Application'}
        {this.props.loading && (
          <span
            role="status"
            aria-hidden="true"
          />
        )}
        </button>

      </div>
    </LayoutLogin>
    )
  }
}


export default Step3
