import fs from "fs";

export const home = async (req, res) => {
	fs.readdir("uploads/txt", "utf8", (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log("the directory has...", data);
		return res.render("txt2html", { files: data });
	});
};

export const read = (req, res) => {
	if (req.method === "GET") {
		const { id } = req.params;
		fs.readFile(`uploads/txt/${id}`, "utf8", (err, data) => {
			if (err) {
				console.error(err);
				return;
			}
			console.log("the file data is", data);
			return res.render("read", { data });
		});
	} else if (req.method === "POST") {
		console.log(req.file);
		return res.redirect(`read/${req.file.filename}`);
	}
};
