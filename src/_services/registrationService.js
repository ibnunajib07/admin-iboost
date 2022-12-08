import axios from "axios";

export const corporateRegistration = (formData, setFormData, channelDeals, setChannelDeals) => {
    const payload = {
        ...formData,
        channelDeals
    }
    console.table(payload);
    // console.table(channelDeals);
};

export const staffRegistration = (formData, setFormData) => {
    const payload = {
        ...formData,
    }
    console.table(payload);
    // console.table(channelDeals);
};