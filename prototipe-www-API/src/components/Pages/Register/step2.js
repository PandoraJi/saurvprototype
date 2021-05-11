import React from 'react'
//import { Link } from 'gatsby'
import { LayoutLogin } from '../../Layout'

import { InputText } from '../../Forms'

const initialState = {
}

class Step2 extends React.Component {
  state = initialState

  render() {
    let { fields } = this.props;

    return (
      <LayoutLogin>
      <div className="mx-auto max-w-screen-lg">

        <div className="flex flex-col md:flex-row mb-10">
          <div className="flex-1 md:mr-5 mb-4 md:mb-0">
            <h2 className="mb-4">Welcome!</h2>
            <p className="text-base text-gray-light font-medium">Congratulations! If you’re reading this, it’s because a colleague has recommended you to be part of an exclusive creative network.</p>
          </div>

          <div className="md:ml-5 flex-1 bg-gray-darker text-center rounded py-7 px-10 ">
            <p className="font-semibold text-base md:text-plus2">The goal is simple: To pinpoint and develop ideas into TV series, documentaries, digital content, branded content and movies.</p>
          </div>
        </div>

        <hr className="mb-10" />

        <div>
          <h2 className="mb-4">What’s in it for you</h2>
          <p className="text-gray-lighter text-sm">Please agree to our terms by entering your initials on each field</p>

          <div className="flex flex-col md:flex-row p-7 md:py-10 md:px-16 bg-gray-darker rounded mt-10 border border-blue">
            <div className="md:w-2/3 md:mr-5">
              <p className="text-sm2 font-medium">When something you bring to our attention is greenlit to production, you get 10% of Prototipe’s Producer fees on any long-form production sale. That’s the bounty on the idea you supplied, no additional work from you needed. (Note: Aggregated sales, like the hypothetical ghostly pets roundup above, could mean sharing the 10 percent reward with other Farmers.) The farmer is also given an Associate Producer credit on the project, subject to network approval.</p>
            </div>
            <div className="mt-4 md:w-1/3 md:ml-5">
              <InputText
              handleUpdate={this.props.handleUpdate}
              label={"Initials"}
              name={"initials_1"}
              value={fields.step_2.initials_1}
              id={"initials_1"}
              placeholder={"Type your initials to agree"}
              autoComplete={"off"}
              errorContent={this.props.fields.step_2.error}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row p-7 md:py-10 md:px-16 bg-gray-darker rounded mt-10  border border-blue">
            <div className="md:w-2/3 md:mr-5">
              <p className="text-sm2 font-medium">This company is about opportunity as well as money. If you pitch an idea and want to help us develop it into a show—by contacting subjects or taking photos and video, for example— you may have that option. Let’s say the show you pitched and co-developed is sold to a network; we’ll make sure they see the value of your contribution and consider you for other compensated roles such as consultant, associate producer or even as onscreen talent. If the network does not, you always have the 10% backstop from the Farm as compensation. (This is an either-or. If your role with the network earns more than our 10% fee to you, they pay you, not us. If your role with the network earns you less than 10% of what Prototipe producers make, don’t worry, we pay you the difference. This way, we’re incentivized to encourage your involvement.)</p>
            </div>
            <div className="mt-4 md:w-1/3 md:ml-5">
            <InputText
              handleUpdate={this.props.handleUpdate}
              label={"Initials"}
              name={"initials_2"}
              value={fields.step_2.initials_2}
              id={"initials_2"}
              placeholder={"Type your initials to agree"}
              autoComplete={"off"}
              errorContent={this.props.fields.step_2.error}
              />
            </div>
          </div>


          <div className="flex flex-col md:flex-row p-7 md:py-10 md:px-16 bg-gray-darker rounded mt-10  border border-blue">
            <div className="md:w-2/3 md:mr-5">
              <p className="text-sm2 font-medium">We’re looking for good Proto-Farmers, people at nodal points of information, who know a good story when they hear it and have some judgment about the public interest. If you introduce someone to us, and he/she is accepted into The Farm, you make $1,000 every time that person successfully pitches an idea that is greenlit for long-form production by a media company.</p>
            </div>
            <div className="mt-4 md:w-1/3 md:ml-5">
            <InputText
              handleUpdate={this.props.handleUpdate}
              label={"Initials"}
              name={"initials_3"}
              value={fields.step_2.initials_3}
              id={"initials_3"}
              placeholder={"Type your initials to agree"}
              autoComplete={"off"}
              errorContent={this.props.fields.step_2.error}
              />
            </div>
          </div>


          <div className="flex flex-col md:flex-row p-7 md:py-10 md:px-16 bg-gray-darker rounded mt-10  border border-blue">
            <div className="md:w-2/3 md:mr-5">
              <p className="text-sm2 font-medium">The Farm can also serve as a vehicle to launch ideas. The higher-profile work you do through the Farm could mean tie-ins to national media companies, literary agents, production studios, publishing houses, national magazine outlets, TV networks and entertainment agents. It’s really a matter of your ambition and desired level of involvement. You can collect 10% for a good tip and never even watch the show, or you can dive in and create a brand for yourself.</p>
            </div>
            <div className="mt-4 md:w-1/3 md:ml-5">
            <InputText
              handleUpdate={this.props.handleUpdate}
              label={"Initials"}
              name={"initials_4"}
              value={fields.step_2.initials_4}
              id={"initials_4"}
              placeholder={"Type your initials to agree"}
              autoComplete={"off"}
              errorContent={this.props.fields.step_2.error}
              />
            </div>
          </div>

        </div>

        <button
        onClick={(e) => this.props.validate(e)}
        className="btn bg-red w-full mt-10">
        {this.state.loading ? null : 'Next: About You'}
        {this.state.loading && (
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


export default Step2
