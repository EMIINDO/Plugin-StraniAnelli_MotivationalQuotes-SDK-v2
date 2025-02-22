"use strict";

{
	globalThis.C3.Plugins.StraniAnelli_MotivationalQuotes.Instance = class StraniAnelli_MotivationalQuotesInstance extends globalThis.ISDKInstanceBase
	{
		constructor()
		{
			super();

            const properties = this._getInitProperties();

			// Initialise object properties
			this._testProperty = 0;

			if (properties)		// note properties may be null in some cases
			{ }

			// elencoJSONlocali: è un array in cui salvo tutti i file json e li trasforno in oggetti js
			// in questo modo non devo richiamarli ogni volta e mi evito i problemi legati ad async
			// il formato è:
			//	{
			//		nameFile: nome del file json (con l'estensione)
			//		json: oggetto con le citazioni
			//	}
			// il file json deve essere nela forma:
			/*
					{
						"nomecategoria":
							[
								{
									"autore": "gino",
									"citazione": "la citazione di gino"
								},
								{
									"autore": "gino",
									"citazione": "la citazione di gino"
								}
							],
						"altronomecategoria":
							[
								{
									"autore": "gino",
									"citazione": "la citazione di gino"
								},
								{
									"autore": "gino",
									"citazione": "la citazione di gino"
								}
							]
					}
			*/

			this.elencoJSONlocali = []
		}

		_release()
		{
			super._release();
		}

		_saveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}

		_loadFromJson(o)
		{
			// load state for savegames
		}
	};
}
