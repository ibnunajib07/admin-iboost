import React, { useState } from "react";
import { 
    Typography, 
    Input, 
    Button, 
    Divider,
} from "antd";

import { staffRegistration } from "../../_services";

import "./_newpage.css";

const { Text } = Typography;

export const NewPage = () => {
    const [formData, setFormData] = useState(
        {
            staffName: "",
            personResponsibleNIP: "",
            personResponsiblePosition: "",
            // userName: "",
            email: "",
            password: ""
        }
    );
        
    return (
        <div className="staff-registration-container">
        <Divider orientation="left" style={{ fontWeight: "bold", marginBottom: "40px" }}>CREATE STAFF ACCOUNT</Divider>
        <div className="registration-form-container">

            <div className="parent-container">
                <div className="label-input-container">
                    <Text><Text style={{ color: "red" }}>*</Text>Nama</Text>
                </div>
                <div className="form-input-container">
                    <Input 
                        value={formData.staffName}
                        placeholder="Input Nama Staff" 
                        size="large"
                        onChange={(e) => {
                            setFormData({...formData, staffName: e.target.value});
                        }} 
                    />
                </div>
            </div>

            <div className="parent-container">
                <div className="label-input-container">
                    <Text><Text style={{ color: "red" }}>*</Text>NIP</Text>
                </div>
                <div className="form-input-container">
                    <Input 
                        value={formData.personResponsibleNIP}
                        type="number"
                        disabled={formData.staffName?.length === 0 ? true : false}
                        placeholder="Input NIP Staff" 
                        size="large"
                        onChange={(e) => {
                            setFormData({...formData, personResponsibleNIP: e.target.value});
                        }} 
                    />
                </div>
            </div>

            <div className="parent-container">
                <div className="label-input-container">
                    <Text><Text style={{ color: "red" }}>*</Text>Jabatan</Text>
                </div>
                <div className="form-input-container">
                        <Input
                            type="text"
                            size="large"
                            maxLength={16}
                            placeholder="Input Jabatan Staff" 
                            disabled={formData.personResponsibleNIP.length === 0 ? true : false}
                            onChange={(e) => {
                                setFormData({...formData, personResponsiblePosition: e.target.value});
                            }} 
                        />
                </div>
            </div>

            {/* <div className="parent-container">
                <div className="label-input-container">
                    <Text><Text style={{ color: "red" }}>*</Text>Username</Text>
                </div>
                <div className="form-input-container">
                    <Input
                        size="large"
                        value={formData.userName}
                        placeholder="Input Username" 
                        disabled={channelDeals[0].effectiveStartDate.length === 0 && channelDeals[0].effectiveEndDate.length === 0 ? true : false}
                        onChange={(e) => {
                            setFormData({...formData, userName: e.target.value});
                        }} 
                    />
                </div>
            </div> */}

            <div className="parent-container">
                <div className="label-input-container">
                    <Text><Text style={{ color: "red" }}>*</Text>Email</Text>
                </div>
                <div className="form-input-container">
                    <Input 
                        size="large"
                        value={formData.email}
                        placeholder="Input Email" 
                        disabled={formData.personResponsiblePosition.length === 0 ? true : false}
                        onChange={(e) => {
                            setFormData({...formData, email: e.target.value});
                        }} 
                    />
                </div>
            </div>

            <div className="parent-container">
                <div className="label-input-container">
                    <Text><Text style={{ color: "red" }}>*</Text>Password</Text>
                </div>
                <div className="form-input-container">
                    <Input.Password 
                        size="large"
                        value={formData.password}
                        placeholder="Input Password" 
                        disabled={formData.email.length === 0 ? true : false}
                        onChange={(e) => {
                            setFormData({...formData, password: e.target.value});
                        }} 
                    />
                </div>
            </div>

            <div className="button-register-container">
                <Button
                    type="primary"
                    style={{ minWidth: "40%" }}
                    disabled={formData.password.length < 5 ? true : false}
                    onClick={() => {
                        staffRegistration(formData, setFormData);
                    }}
                >
                    R E G I S T E R
                </Button>
            </div>

        </div>
    </div>
    );
};