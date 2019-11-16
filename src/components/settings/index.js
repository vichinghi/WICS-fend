import React from 'react';
import "./settings.scss"
import Navbar from '../common/NavBar';

const Settings = () => {
    return (
        <React.Fragment>
            <div className="settings">
                <Navbar />
                <p class="head">Settings</p>
                <form>
                    <div class="row">
                        <div class="col-lg-3"></div>
                        <div class="col-lg-3">
                            <label for="address">Address</label>
                            <input type="text" class="form-control" id="address" name="address" placeholder="Enter Address" /><br />
                            <label for="scanInterval">Scan Interval</label>
                            <select class="form-control" id="exampleFormControlSelect2">
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Anually</option>
                            </select><br />
                            <label for="Addkeywords">Add Key Words</label>
                            <input type="text" class="form-control" id="keyWords" name="keyWords" placeholder="Add keyWords separated with a comma" /><br />
                            <input type="submit" name="submit" class ="btn btn-success"/>
                        </div>

                        <div class="col-lg-3">
                            <label for="exampleFormControlSelect2">Scan Interval</label>
                            <select class="form-control" id="exampleFormControlSelect2">
                                <option>English</option>
                                <option>French</option>
                                <option>Luganda</option>
                            </select><br />
                        </div>
                        <div class="col-lg-3 "></div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Settings;
