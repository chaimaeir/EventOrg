const Provider = require("../models/provider"); 



// get all providers
exports.getAllProviders = async (req, res) => {
  try {
    const providers = await Provider.find();
    res.status(200).json(providers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Route for getting provider by id
exports.providerById = async (req, res) => {
    try {
      const provider = await Provider.findById(req.params.providerId);
      if (!provider) {
        return res.status(404).json({ message: "Provider not found" });
      }
      res.status(200).json(provider);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Route for updating provider profile
  exports.updatedProvider = async (req, res) => {
    try {
      const updatedProvider = await Provider.findByIdAndUpdate(req.params.providerId, req.body, { new: true });
      if (!updatedProvider) {
        return res.status(404).json({ message: "Provider not found" });
      }
      res.status(200).json(updatedProvider);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Route for deleting provider profile
  exports.deleteProvider = async (req, res) => {
    try {
      const deletedProvider = await Provider.findByIdAndDelete(req.params.providerId);
      if (!deletedProvider) {
        return res.status(404).json({ message: "Provider not found" });
      }
      res.status(200).json({ message: "Provider deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
 