export default (req, res) => {
    const frpServerIp = process.env.FRP_SERVER_IP;
    res.status(200).json({ frpServerIp });
};
