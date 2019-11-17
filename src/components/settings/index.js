import React, { Component } from 'react';
import "./settings.scss"
import Navbar from '../common/NavBar';
function sendSettings(e) {
    e.preventdefault()
    const url = document.getElementById()

}
class Settings extends Component {
    state = {
        "address": "",
        "keyWords": ""
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    sendKeyword = () => {
        const data = { "word": this.state.keyWords };
        fetch('https://wics.herokuapp.com/keyword', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        })
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(err=>{
                console.log(err)
            })
    };

    sendAddress = () => {
        const url = { "url": this.state.address }
        fetch('https://wics.herokuapp.com/website', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(url)

        })
            .then(resp => resp.json())
            .then(data => console.log(data))
            .catch(err=>{
                console.log(err)
            })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.keyWords) {
            this.sendKeyword()
        }
        if(this.state.address){
            this.sendAddress()
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="settings">
                    <Navbar />
                    <p className="head">Settings</p>
                    <form method="POST" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-3">
                                <label for="address">Address</label>
                                <input type="text" className="form-control" id="address" name="address" onChange={this.onChange} placeholder="Enter Address" /><br />
                                <label for="scanInterval">Scan Interval</label>
                                <select className="form-control" id="exampleFormControlSelect2">
                                    <option>Daily</option>
                                    <option>Weekly</option>
                                    <option>Monthly</option>
                                    <option>Anually</option>
                                </select><br />
                                <label for="Addkeywords">Add Key Words</label>
                                <input type="text" className="form-control" id="keyWords" name="keyWords" onChange={this.onChange} placeholder="Add keyWords separated with a comma" /><br />
                                <input type="submit" name="submit" class="btn btn-success" />
                            </div>

                            <div className="col-lg-3">
                                <label for="exampleFormControlSelect2">Select Language</label>
                                <select className="form-control" id="exampleFormControlSelect2">
                                    <option>English</option>
                                    <option>French</option>
                                    <option>Luganda</option>
                                </select><br />
                            </div>
                            <div className="col-lg-3 "></div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Settings;
