"use strict";

{
	globalThis.C3.Plugins.StraniAnelli_MotivationalQuotes.Acts =
	{
			async InitializeLocalJson(nameFile) {
			const url = await this.runtime.assets().getProjectFileUrl(nameFile);
			const json = await this.runtime.assets().FetchJson(url);

			const index = this.elencoJSONlocali.findIndex( item => item["nameFile"] == nameFile);
			if (index > -1) {
  			this.elencoJSONlocali.splice(index, 1);
			}

			this.elencoJSONlocali.push({
				"nameFile": nameFile,
				"json": json
			});
		},

		async IntializeExternalJson(alias, url) {
			const json = await this.runtime.assets().FetchJson(url);

			const index = this.elencoJSONlocali.findIndex( item => item["nameFile"] == alias);
			if (index > -1) {
  			this.elencoJSONlocali.splice(index, 1);
			}

			this.elencoJSONlocali.push({
				"nameFile": alias,
				"json": json
			});
		},

		RemoveJSONFromMemory(nameFile) {
			const index = this.elencoJSONlocali.findIndex( item => item["nameFile"] == nameFile);
			if (index > -1) {
  			this.elencoJSONlocali.splice(index, 1);
			}
		},

		RemoveAllJSONFromMemory() {
			this.elencoJSONlocali = [];
		}

	};
}
