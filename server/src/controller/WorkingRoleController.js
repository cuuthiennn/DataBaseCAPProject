const WorkingRoleModle = require("../models/WorkingRoleModle");
const SessionService = require("../services/sessionService");

class WorkingRoleController {
  constructor() {
    this.workingRoleModle = new WorkingRoleModle();
    this.sessionService = new SessionService();
  }

  getAllWorkingRoles = async (req, res) => {
    // if (this.workingRoleModle.isExist(req)) {
    try {
      const workingRoles = JSON.parse(
        await this.workingRoleModle.getAllWorkingRoles()
      ).recordset;
      res.status(200).json({
        message: "Success when call api getAllWorkingRoles",
        success: true,
        data: workingRoles,
      });
    } catch (error) {
      res.status(200).json({
        message: "Error when call api getAllWorkingRoles" + error.message,
        success: false,
        data: data,
      });
    }
    // }
  };

  createWorkingRole = async (req, res) => {
    // if (this.sessionService.isExist(req)) {
    try {
      const { path_name, role_parent_id } = req.params;
      const workingRole = JSON.parse(
        await this.workingRoleModle.createRole(path_name, role_parent_id)
      ).recordset;
      res.status(200).json({
        message: "Success when call api createWorkingRole",
        success: true,
        data: workingRole,
      });
    } catch (error) {
      res.status(404).json({
        message: "Error when call api createWorkingRole: " + error.message,
        success: false,
        data: null,
      });
    }
    // } else {

    // }
  };

  getPathById = async (req, res) => {
    //if (this.sessionService.isExist(req)) {
    const user_id = req.params.id;
    try {
      const result = JSON.parse(
        await this.workingRoleModle.getPathById(user_id)
      ).recordset;
      if (workingRole.length == 0) throw new Error("Working role not found");
      res.status(200).json({
        message: "Success when call api getPathById",
        success: true,
        data: result,
      });
    } catch (error) {
      res.status(404).json({
        message: "Error when call api getPathById: " + error.message,
        success: false,
        data: null,
      });
    }
    // } else {

    // }
  };

  getWorkingRoleChileById = async (req, res) => {
    //if (this.sessionService.isExist(req)) {
    const user_id = req.params.id;
    try {
      const result = JSON.parse(
        await this.workingRoleModle.getWorkingRoleChileById(user_id)
      ).recordset;
      res.status(200).json({
        message: "Success when call api getWorkingRoleChileById",
        success: true,
        data: result,
      });
    } catch (error) {
      res.status(404).json({
        message:
          "Error when call api getWorkingRoleChileById: " + error.message,
        success: false,
        data: null,
      });
    }
    // } else {

    // }
  };

  updateWorkingRole = async (req, res) => {
    // if (this.sessionService.isExist(req)) {
    try {
      const { id, path_name, role_parent_id } = req.params;
      const result = await this.workingRoleModle.updateWorkingRole(
        id,
        path_name,
        role_parent_id
      );
      res.status(200).json({
        message: "Success when call api updateWorkingRole",
        success: true,
        data: result,
      });
    } catch (error) {
      res.status(404).json({
        message: "Error when call api updateWorkingRole: " + error.message,
        success: false,
        data: null,
      });
    }
    // } else {

    // }
  };

  deleteWorkingRole = async (req, res) => {
    // if (this.sessionService.isExist(req)) {
    try {
      const { id } = req.params;
      const result = await this.workingRoleModle.deleteWorkingRole(id);
      res.status(200).json({
        message: "Success when call api deleteWorkingRole",
        success: true,
        data: result,
      });
    } catch (error) {
      res.status(404).json({
        message: "Error when call api deleteWorkingRole: " + error.message,
        success: false,
        data: null,
      });
    }
    // } else {

    // }
  };
}

module.exports = WorkingRoleController;
