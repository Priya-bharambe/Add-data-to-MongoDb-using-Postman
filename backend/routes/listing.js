// const router = require("express").Router();
// Add New listing
// router.post("/", (req, res) => {
//     res.send("Add New listing");
// });

const router = require("express").Router();
const Listing = require("../model/Listing");
// Add New listing
router.post("/", async(req, res) => {
    const listing = new Listing({
        title: req.body.title,
        price: req.body.price,
        locality: req.body.locality,
        details: req.body.details
    });
    try {
        const savedListing = await listing.save();
        res.send(savedListing);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get All listings
// router.get("/", (req, res) => {
//     res.send("All listings");
// });

// Get All listings
router.get("/", async(req, res) => {
    try {
        const listings = await Listing.find();
        res.json(listings);
    } catch (error) {
        res.json({ message: error });
    }
});

// Single listing
// router.get("/:listingId", (req, res) => {
//     res.send("Single listing");
// });

// Single listing
router.get("/:listingId", async(req, res) => {
    try {
        const listing = await Listing.findById(req.params.listingId);
        res.json(listing);
    } catch (error) {
        res.json({ message: error });
    }
});

// Update listing
// router.put("/:listingId", (req, res) => {
//     res.send("Update listing");
// });

// Update listing
router.put("/:listingId", async(req, res) => {
    try {
        const listing = {
            title: req.body.title,
            price: req.body.price,
            locality: req.body.locality,
            details: req.body.details
        };
        const updatedListing = await Listing.findByIdAndUpdate({ _id: req.params.listingId },
            listing
        );
        res.json(updatedListing);
    } catch (error) {
        res.json({ message: error });
    }
});

// Delete listing
// router.delete("/:listingId", (req, res) => {
//     res.send("Delete listing");
// });

// Delete listing
router.delete("/:listingId", async(req, res) => {
    try {
        const removeListing = await
        Listing.findByIdAndDelete(req.params.listingId);
        res.json(removeListing);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;