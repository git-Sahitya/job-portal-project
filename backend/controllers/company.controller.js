import { Company } from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName, description } = req.body;
    // check if companyName not come
    if (!companyName) {
      return res.status(400).json({ message: "company name is required" });
    }
    if (!description) {
      return res.status(400).json({ message: "Description name is required" });
    }
    // check if companyName already exist
    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({ message: " company already exists" });
    }
    // create company
    company = await Company.create({
      name: companyName,
      description,
      userId: req.id,
    });
    return res.status(201).json({
      message: "Company created successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getAllCompanies = async (req, res) => {
  try {
    const userId = req.id; // loggedIn user id
    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(404).json({
        message: "No companies found",
      });
    }
    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.error(error);
  }
};

// get company By Id

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    return res.status(201).json({ company: company, success: true });
  } catch (error) {
    console.error(error);
  }
};

//update company details

export const upadateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file; // cloudinary service

    const updateData = { name, description, website, location };

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    return res.status(200).json({ message: "Company updated" });
  } catch (error) {
    console.log(error);
  }
};
