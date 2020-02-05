import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Checkbox,
  Radio,
  Button,
  ButtonToolbar
} from "react-bootstrap";
import { Frequency } from "../constants";

const initialState = {
  name: "",
  stateful: true,
  frequency: Frequency.DAILY
};
export default class SaveQueryForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onSubmit = this.onSubmit.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  onCancel() {
    this.props.onCancel();
  }

  onFormChange(prop) {
    return e => {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      this.setState({
        [prop]: value,
        updated: true
      });
    };
  }

  shouldDisable() {
    return false;
  }

  render() {
    const isDisabled = this.shouldDisable();
    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup>
          <i className="fa fa-question-circle" aria-hidden="true" /> Create
          email notification for this query in myADS
        </FormGroup>
        <FormGroup controlId="notification-name">
          <ControlLabel>Notification Name</ControlLabel>
          <FormControl
            type="text"
            placeholder="My Notification"
            value={this.state.name}
            onChange={this.onFormChange("name")}
            disabled={isDisabled}
          />
        </FormGroup>
        <FormGroup controlId="notification-stateful">
          <Checkbox
            checked={this.state.stateful}
            onChange={this.onFormChange("stateful")}
            disabled={isDisabled}
          >
            Only receive new results
          </Checkbox>
        </FormGroup>
        <FormGroup controlId="notification-frequency">
          <ControlLabel id="frequency-check">Frequency</ControlLabel>
          <Radio
            name="frequency"
            checked={this.state.frequency === "daily"}
            value="daily"
            onChange={this.onFormChange("frequency")}
            aria-labelledby="frequency-check"
            disabled={isDisabled}
          >
            Daily
          </Radio>
          <Radio
            name="frequency"
            checked={this.state.frequency === "weekly"}
            value="weekly"
            onChange={this.onFormChange("frequency")}
            aria-labelledby="frequency-check"
            disabled={isDisabled}
          >
            Weekly
          </Radio>
        </FormGroup>
        <FormGroup>
          <ButtonToolbar>
            <Button type="submit" bsStyle="primary" disabled={isDisabled}>
              Create
            </Button>
            <Button
              bsStyle="default"
              onClick={this.onCancel}
              disabled={isDisabled}
            >
              Cancel
            </Button>
          </ButtonToolbar>
        </FormGroup>
        <FormGroup>
          <a href="#/user/settings/myads">Go to myADS settings</a>
        </FormGroup>
      </form>
    );
  }
}
