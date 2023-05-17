import Author from "../models/Author.js";
// import Company from "../models/Company.js";

async function is_active(req, res, next) {
    const userId = req.user.id;

    try {
        const author = await Author.findOne({ user_id: userId });
        if (!author) {
        return res.status(404).json({ message: "Author not found" });
        }
        if (!author.active) {
        return res.status(401).json({ message: "the Author is inactive" });
        }

        // const company = await Company.findOne({ user_id: userId });
        // if (!company) {
        // return res.status(404).json({ message: "Company not found" });
        // }
        // if (!company.active) {
        // return res.status(401).json({ message: "Company inactive" });
        // }

        next();
    } catch (err) {
        return res.status(500).json({ message: "error" });
    }
}

export default is_active;
