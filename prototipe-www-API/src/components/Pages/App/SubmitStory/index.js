import React, { useRef, useState } from 'react'
import { Link } from 'gatsby'
import { AppContent } from '@layout'
import { SelectSingle, InputText,SelectCreateMulti } from '@forms'
import IconUpload from '@assets/vectors/upload.svg'
import { gql, useMutation } from '@apollo/client'
import { navigate } from '@reach/router'
import { StoryDetail} from '@graphql/apis/storytypedetail'
import { ArenasList} from '@graphql/apis/arenasList'
import {MasterList} from '@graphql/apis/mastersetting'
const STORYSUBMIT = gql`
    mutation AddStory(
    $submitStoryType:submitStoryInput
    ) {
        addStory(submitStoryType: $submitStoryType
           ) {
            message
        }
    }
`;
const SubmitStory = (props) => {
  const [storyState, setStoryState] = useState({
    storyType: [],
    budget: '',
    full_name: '',
    projectStory: '',
    notes: '',
    files: null,
    filedata:null,
    arenas: [],
    settings: [],
    userId: localStorage.getItem('USER_ID'),
    storySubmitId: ''
  });
  const inputFile = useRef(null)

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpdate = event => {

      setStoryState({
        ...storyState,
        [event.target.name]: event.target.value
      });

  };



  const onFileChange = event => {

    // Update the state
    storyState.files=event.target.files[0];
  // setStoryState({ files: event.target.files[0] });


  };

  const onButtonBrowseClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };
  const onFileUpload = () => {

    // Create an object of formData
    const formData = new FormData();

    formData.append(
      "myFile",
      storyState.files,
      storyState.files.name
    );

    // Details of the uploaded file
    console.log(storyState.files);
    storyState.filedata=formData;
    // Request made to the backend api
    // Send formData object
    // axios.post("api/uploadfile", formData);
  };



  const getSelectionStory = (event) => {
    event.persist();

    let item_name = event.target.textContent;
    console.log(item_name);
    if(item_name==="")
    {
      storyState.storyType={};
    }else
    {
      let storytypeItem= storyTypelist.filter(x=>x.value===item_name);
      if(storytypeItem.length>0)
      {
        storyState.storyType={ id:storytypeItem[0].key,name:storytypeItem[0].text };
      }
    }

  };

  const getSelectionArenas = (event) => {
    event.persist();

    let item_name = event.target.textContent;
    console.log(item_name);
    console.log(item_name);
    if(item_name==="")
    {
      let index= storyState.arenas.findIndex(x=>x.name===event.target.parentNode.textContent);
      // var index = storyState.arenas.indexOf(event.target.parentNode.textContent);
      if (index !== -1) {
        storyState.arenas.splice(index, 1);
      }
    }else
    {
      let areanaItem= arneas.filter(x=>x.value===item_name);
      if(areanaItem.length>0)
      {
        storyState.arenas.push({ id:areanaItem[0].key,name:areanaItem[0].text });
      }
    }
  };
  const getSelectionSetting = (event) => {
    event.persist();

    let item_name = event.target.textContent;
    console.log(item_name);
    console.log(item_name);
    if(item_name==="")
    {
      let index= storyState.settings.findIndex(x=>x.name===event.target.parentNode.textContent);
      // var index = storyState.settings.indexOf(event.target.parentNode.textContent);
      if (index !== -1) {
        storyState.settings.splice(index, 1);
      }
    }else
    {
      let settingItem= settings.filter(x=>x.value===item_name);
      if(settingItem.length>0)
      {
        storyState.settings.push({ id:settingItem[0].key,name:settingItem[0].text });
      }

    }

  };
let arneas=[];
let settings=[];
let storyTypelist=[];
const getstorylist=StoryDetail();
  console.log("Storylist"+getstorylist);
  const getarenasList=ArenasList();
  if(getarenasList!==null)
  {
    for(let item in getarenasList.arenasDetail)
    {
      arneas.push({ id: getarenasList.arenasDetail[item]._id,key: getarenasList.arenasDetail[item]._id, text: getarenasList.arenasDetail[item].name, value: getarenasList.arenasDetail[item].name })
    }

  }
  else
  {
    arneas= [
      { key: 'm',id:'1', text: 'arneas1', value: 'arneas1' },
      { key: 'f',id:'2', text: 'arneas2', value: 'arneas2' },
      { key: 'o',id:'3', text: 'arneas3', value: 'arneas3' },
    ]
  }
  console.log(arneas);
  const getmasterList=MasterList();
  console.log("masterlist"+getmasterList);

  if(getstorylist!==null)
  {
    for(let item in getstorylist.storyTypeDetail)
    {
      storyTypelist.push({ id: getstorylist.storyTypeDetail[item]._id,key: getstorylist.storyTypeDetail[item]._id, text: getstorylist.storyTypeDetail[item].name, value: getstorylist.storyTypeDetail[item].name })
    }

  }
  else
  {
    storyTypelist=  [
      { key: 'm', id:'1', text: 'story1', value: 'story1' },
      { key: 'f',id:'2', text: 'story2', value: 'story2' },
      { key: 'o',id:'3', text: 'story3', value: 'story3' },
    ]

  }

  if(getmasterList!==null)
  {
    for(let item in getmasterList.settingsDetail)
    {
      settings.push({ id: getmasterList.settingsDetail[item]._id,key: getmasterList.settingsDetail[item]._id, text: getmasterList.settingsDetail[item].name, value: getmasterList.settingsDetail[item].name })
    }

  }
  else
  {
    settings= [
      { key: 'm',id:'1', text: 'setting1', value: 'setting1' },
      { key: 'f',id:'2', text: 'setting2', value: 'setting2' },
      { key: 'o',id:'3', text: 'setting3', value: 'setting3' },
    ]

  }

  const [storyMutate] = useMutation(STORYSUBMIT, {
    variables: {
      // id: storyState.id,
      submitStoryType: {
        storyType: storyState.storyType,
        budget: storyState.budget,
        fullName: storyState.full_name,
        projectStory: storyState.projectStory,
        notes: storyState.notes,
        files: storyState.filedata,
        arenas: storyState.arenas,
        settings: storyState.settings,
        userId: storyState.userId,
        storySubmitId: storyState.storySubmitId
      }
    },
    onCompleted: ({ story }) => {
      console.log('response', story);

      if(story) {
        setError(null);
        setIsLoading(false);
        navigate('/dashboard');
      } else {
        // error;
        setError('error');
        setIsLoading(false);
      }

    },
    onError:(error)=>{
      console.log(error.message);
      setError(error.message);
      setIsLoading(false);
    }

  });

  const handleStory = async e => {
    e.preventDefault()
    if(validate()) {
      setIsLoading(true);
      setError(null);
      console.log('story...', isLoading);
      await storyMutate();
    }
  };


  const validate= () => {

    let errors = [];
    let isValid = true;


    if (!storyState.storyType) {
      isValid = false;
      errors.push("Please enter your story Type.");
      storyState.storyTypeerror = "Please enter story Type";
    } else if (typeof storyState.storyType == "undefined") {
      isValid = false;
      errors.push("Please enter your story Type.");
      storyState.storyTypeerror = "Please enter Valid story Type";
    } else {
      storyState.storyTypeerror = "";
    }

    if (!storyState.budget) {
      isValid = false;
      errors.push("Please enter your budget .");
      storyState.budgeterror = "Please enter Valid budget";
    } else if (typeof storyState.budget == "undefined") {
      isValid = false;
      errors.push("Please enter your budget .");
      storyState.budgeterror = "Please enter Valid budget ";
    } else {
      storyState.budgeterror = "";
    }

    if (!storyState.full_name) {
      isValid = false;
      errors.push("Please enter your full Name.");
      storyState.full_nameerror = "Please enter  full Name";
    } else if (typeof storyState.full_name == "undefined") {
      isValid = false;
      errors.push("Please enter your full Name.");
      storyState.full_nameerror = "Please enter  full Name";
    } else {
      storyState.last_nameerror = "";
    }

    if (!storyState.projectStory) {
      isValid = false;
      errors.push("Please enter your project Story .");
      storyState.projectStoryerror = "Please enter project Story";
    } else if (typeof storyState.projectStory == "undefined") {
      isValid = false;
      errors.push("Please enter your project Story.");
      storyState.projectStoryerror = "Please enter  project Story";
    } else {
      storyState.projectStoryerror = "";
    }

    if (!storyState.notes) {
      isValid = false;
      errors.push("Please enter your notes.");
      storyState.noteserror = "Please enter Valid notes";
    } else if (typeof storyState.notes == "undefined") {
      isValid = false;
      errors.push("Please enter your notes.");
      storyState.noteserror = "Please enter notes";
    } else {
      storyState.noteserror = "";
    }

    // if (!storyState.files) {
    //   isValid = false;
    //   errors.push("Please enter your files.");
    //   storyState.fileserror = "Please enter Valid files";
    // } else if (typeof storyState.files == "undefined") {
    //   isValid = false;
    //   errors.push("Please enter your files.");
    //   storyState.fileserror = "Please enter Valid files";
    // } else {
    //   storyState.fileserror = "";
    // }

    if (!storyState.arenas) {
      isValid = false;
      errors.push("Please enter your arenas.");
      storyState.arenaserror = "Please enter Valid arenas";
    } else if (typeof storyState.arenas == "undefined") {
      isValid = false;
      errors.push("Please enter your arenas.");
      storyState.arenaserror = "Please enter Valid arenas";
    } else {
      storyState.countryerror = "";
    }

    if (!storyState.settings) {
      isValid = false;
      errors.push("Please enter your settings.");
      storyState.settingserror = "Please enter Valid settings";
    } else if (typeof storyState.settings == "undefined") {
      isValid = false;
      errors.push("Please enter your settings.");
      storyState.settingserror = "Please enter Valid settings";
    } else {
      storyState.settingserror = "";
    }

    setStoryState({
      ...storyState,
      errors
    });
    setError(errors);
    return isValid;
  }



  const fileData = () => {
console.log(storyState.files);
    if (storyState.files) {

      return (
        <div>
          <p>
           <ul className={"files_ul"}>
             <li>File Details:</li>
             <li> File Name: {storyState.files.name}</li>
             <li>File Type: {storyState.files.type}</li>
           </ul>

         </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>No Data</h4>
        </div>
      );
    }
  };




  return (
    <AppContent {...props}>
      <div className="flex flex-row justify-between mb-8">
        <div>
          <h1 className="text-lg">Submit a Story</h1>
        </div>
        <div></div>
      </div>

      <div className="w-full bg-gray-darker rounded  border border-blue">
        <div className="p-10">
          <div className="flex justify-between">
            <h4 className="text-md text-gray-lighter font-semibold mb-10">
              Project Type
            </h4>
          </div>

          <div className="md:w-1/2">
            <SelectSingle
              label={'Type of Story'}
              name={'story_type'}
              id={'story_type'}
              value={storyState.storyType}
              title={'storyType'}
              placeholder={'Select an option'}
              options={storyTypelist}
              autoComplete={"on"}
              handleUpdate={getSelectionStory}
              errorContent={storyState.storyTypeerror}
            />

            <InputText
              label={'Budget'}
              name={'budget'}
              id={'budget'}
              placeholder={'$0'}
              value={storyState.budget}
              id={"budget"}
              autoComplete={"on"}
              handleUpdate={handleUpdate}
              errorContent={storyState.budgeterror}
            />
          </div>

          <div className="flex justify-between">
            <h4 className="text-md text-gray-lighter font-semibold mb-10 mt-10">
              Project Information
            </h4>
          </div>

          <InputText
            label={'Full Name'}
            name={'full_name'}
            value={storyState.full_name}
            id={'full_name'}
            placeholder={'Project Name'}
            autoComplete={"on"}
            handleUpdate={handleUpdate}
            errorContent={storyState.full_nameerror}
          />

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:mr-4">
              <InputText

                label={'Project Story'}
                name={'projectStory'}
                value={storyState.projectStory}
                id={'projectStory'}
                placeholder={'Project Story'}
                autoComplete={"on"}
                handleUpdate={handleUpdate}
                errorContent={storyState.projectStoryerror}
              />
            </div>
            <div className="md:w-1/2 md:ml-4">
              <InputText
                label={'Notes'}
                name={'notes'}
                value={storyState.notes}
                id={'notes'}
                placeholder={'Project notes'}
                autoComplete={"on"}
                handleUpdate={handleUpdate}
                errorContent={storyState.noteserror}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:mr-4">
              <SelectCreateMulti
                label={'Arenas'}
                name={'arenas'}
                id={'arenas'}
                title={'arenas'}
                value={storyState.arenas}
                placeholder={'Select an option'}
                options={arneas}
                autoComplete={"on"}
                handleUpdate={getSelectionArenas}
                errorContent={storyState.arenaserror}
              />
            </div>
            <div className="md:w-1/2 md:ml-4">
              <SelectCreateMulti
                label={'Setting'}
                name={'settings'}
                id={'settings'}
                value={storyState.settings}
                placeholder={'Select an option'}
                title={'settings'}
                options={settings}
                autoComplete={"on"}
                handleUpdate={getSelectionSetting}
                errorContent={storyState.settingserror}
              />
            </div>
          </div>
          <div className="flex mt-10">
            <button className="rounded border-blue border bg-none text-blue h-8 px-8 mr-4">+ Add Book</button>
            <button className="rounded border-blue border bg-none text-blue h-8 px-8 mr-4">+ Add Talent</button>
            <button className="rounded border-blue border bg-none text-blue h-8 px-8">+ Add Venue</button>
          </div>

          <div className="flex justify-between">
            <h4 className="text-md text-gray-lighter font-semibold mb-10 mt-10">
              Files
            </h4>
          </div>

          <div className="mb-10">
            <div className="rounded border-blue border bg-none text-blue h-24 px-4 flex flex-col justify-center items-center">
              <IconUpload />
              <span  className="border border-blue bg-none h-8 rounded px-5 ml-3 text-blue font-semibold text-plus" onClick={onButtonBrowseClick} >Drop Files here or Browse</span>
              <input name="file"  type="file" multiple
                     id='file' ref={inputFile} style={{display: 'none'}}
                     onChange={onFileChange} />
              {/*<button  onClick={onFileUpload}>Upload!</button>*/}
              {fileData()}
            </div>
          </div>


          <div className="md:w-1/2">
            <InputText

              label={'Initials'}
              name={'storySubmitId'}
              value={storyState.storySubmitId}
              id={'storySubmitId'}
              placeholder={'Type your initials to agree'}
              autoComplete={'off'}
              handleUpdate={handleUpdate}
              errorContent={storyState.storySubmitIderror}
            />
          </div>
        </div>

        <hr />

        <div className="p-10 flex justify-between items-center">
          <span className="flex-1">
            By submitting this story, you agree to our current terms/conditions
          </span>
          <button  onClick={handleStory}  type="submit"
                   disabled={isLoading} className="btn bg-red">Submit Story
            {isLoading ? 'Loading...' : '.'}
            {isLoading && (
              <span
                role="status"
                aria-hidden="true"
              />
            )}
          </button>

        </div>
        {error!=null ? '' : ''}
        {error &&  (
          <div title="Show Error">
              <span
                aria-hidden="true"
              >{error}</span> </div>
        )}

      </div>
       <Link  rel="preload" crossorigin="anonymous" to="/dashboard">Home</Link>
    </AppContent>
  )
}

export default SubmitStory
