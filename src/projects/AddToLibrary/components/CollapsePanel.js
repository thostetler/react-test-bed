import React, { Component } from "react";
import { Panel } from "react-bootstrap";

export default class CollapsePanel extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: true
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const caretDir = this.state.open ? "down" : "right";

    return (
      <Panel expanded={this.state.open} onToggle={this.toggle}>
        <Panel.Heading style={{ backgroundColor: "white" }}>
          <Panel.Title>
            <button
              className="btn btn-link btn-block"
              style={{
                color: "#333",
                fontSize: "1.1em"
              }}
              aria-expanded={this.state.open}
              onClick={this.toggle}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <span>
                  <i className="fa fa-book fa-fw" aria-hidden="true" /> Add
                  papers to library?
                </span>
                <span>
                  <i className={`fa fa-caret-${caretDir}`} aria-hidden="true" />
                </span>
              </div>
            </button>
          </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
            {this.props.render({ collapse: () => this.toggle() })}
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    );
  }
}
