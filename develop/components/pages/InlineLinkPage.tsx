import * as React from "react";
import { InlineLink } from "../../../src/InlineLink/InlineLink";
import { getParameterByName } from "../../utils/queryString";
const Highlight = (require("react-highlight")).default;
const docMD = require("../../../src/InlineLink/readme.md");

export default class InlineLinkPage extends React.Component<any, any>  {
    constructor(props: any) {
        super(props);
    }

    render() {
        const mode = getParameterByName(this.props.location.search, "mode");
        return (
            <div className={"route-template " + ((mode === "dl" || mode === "DL") ? "brief" : "")}>
                <div className="info-holder">

                    <div className="info">
                        <div className="md-file">
                            <Highlight innerHTML={true}>{docMD}</Highlight>
                        </div>
                    </div>

                    <div className="info">
                        <h2>Output</h2>
                        <p>Here is a sample output</p>
                        <div className="result wide">
                            <div><InlineLink onClick={() => alert("Redirect or do some other action")}>Lorem ipsum</InlineLink> dolor sit amet, consectetur adipiscing elit.</div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
