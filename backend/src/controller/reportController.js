import Report from "../model/report.js";
import cloudinary from "../config/cloudinary.js";

export const createReport = async (req, res) => {
  try {
    const {
      incidentDate,
      address,
      latitude,
      longitude,
      animalType,
      behavior,
      injured,
      humanHarm,
    } = req.body;

    let imageUrl = null;

    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
        {
          folder: "reports",
        }
      );

      imageUrl = uploadResult.secure_url;
    }

    const report = await Report.create({
      user: req.user._id,
      incidentDate,
      address,
      location: {
        latitude,
        longitude,
      },
      animalType,
      behavior,
      injured,
      humanHarm,
      image: imageUrl, // 🔥 Cloudinary URL
    });

    res.status(201).json({
      success: true,
      report,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getMyReports = async (req, res) => {
  try {
    const reports = await Report.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: reports.length,
      reports,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: reports.length,
      reports,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getReportById = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id)
      .populate("user", "name email");

    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.status(200).json({
      success: true,
      report,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
