import React, { useState }  from 'react'
import { Link } from 'gatsby'

import ArrowDown from '@assets/vectors/arrow-down-blue.svg';
import ArrowUp from '@assets/vectors/arrow-up-blue.svg';

const More = () => {
    const [moreIsOpen, setMoreIsOpen] = useState(false);
    
    const moreHandler = {
      toggle: function (status) {
        setMoreIsOpen(!status);
      },
      close: function(){
        setMoreIsOpen(false);
      },
      open: function(){
        setMoreIsOpen(true);
      }
    }

    // alert('hi!');
    // console.log('asdasda');
    // console.log(moreHandler);

    return (
    <>  
      <button 
      className="w-full text-center font-bold mt-20 mb-5 cursor-pointer"
      >
        { moreIsOpen ?
        <div className="flex items-center justify-center content-center" onClick={e => moreHandler.close()}>
            <span className="text-blue">Hide</span>
            <ArrowUp />
        </div>
        :
        <div className="flex items-center justify-center content-center" onClick={e => moreHandler.open()}>
            <span>Want to read more about OUR STORY? </span>
            <span className="text-blue ml-2">Click here</span>
            <ArrowDown />
        </div>
        }
      </button>

      { moreIsOpen ?
          <article className="box-blueline">
            <h4 className="text-blue font-semibold text-base md:text-md mb-5">OUR STORY (continued)</h4>
            <div className="two-cols">
              <p className="mb-8 font-medium">
                Like most journalists, Joe was working on a number of stories at
                the same time, and given his freelance background, he was not
                beholden to any specific destination for them. Some ideas didn’t
                have a home, some were offshoots of earlier projects and others
                had logical multimedia angles. What if together, Marc and Joe
                could steer these print media ideas toward film, TV and digital
                media, where the rewards are much greater than Joe’s legacy
                options allowed?
              </p>
              <p className="mb-8 font-medium">
                In the span of only six months, Marc and Joe had four projects
                set up across the media landscape, including TV shows, with
                numerous others in early development stages. That’s a career’s
                worth of success crammed into a very short time frame.
              </p>

              <p className="mb-8 font-medium">
                The conversation then shifted from the shows themselves to
                replicating this success rate. A collaboration with just one
                journalist yielded phenomenal results. So what kind of results
                would they get collaborating with the other tens of thousands of
                freelancers around the world who also have the news judgement,
                reporting skills and storytelling ability to spot worthy
                projects?
              </p>
              <p className="mb-8 font-medium">
                How could they establish contact with an entire web of
                storytellers and media professionals, hearing their ideas and
                letting them know what the creative, digital community is
                actively seeking? How can they set a place at the table for the
                legion of media professionals who have access to information but
                no contacts or outlets to pitch them to?
              </p>


            </div>
          </article>
          : null }
    </>
  )
}

export default More