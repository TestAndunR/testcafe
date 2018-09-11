module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["issueValidate"] = {
        host: process.env.EndPoint_rdsIssueValidate,
        port: process.env.Port_rdsIssueValidate,
        user: process.env.User_rdsIssueValidate,
        password: process.env.Password_rdsIssueValidate,
        database: "issuevalidate"
    };
};