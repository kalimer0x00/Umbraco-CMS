﻿using System;
using System.Collections.Generic;
using System.Globalization;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Umbraco.Core;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Core.PropertyEditors;
using Umbraco.Core.PropertyEditors.ValueConverters;
using Umbraco.Core.Services;
using Umbraco.Web.Models;

namespace Umbraco.Web.PropertyEditors.ValueConverters
{
    /// <summary>
    /// Used to strongly type the value for the image cropper
    /// </summary>
    [DefaultPropertyValueConverter(typeof (JsonValueConverter))] //this shadows the JsonValueConverter
    public class ImageCropperValueConverter : Core.PropertyEditors.ValueConverters.ImageCropperValueConverter
    {
        public ImageCropperValueConverter()
        { }

        public ImageCropperValueConverter(IDataTypeService dataTypeService)
            : base(dataTypeService)
        { }

        public override Type GetPropertyValueType(PublishedPropertyType propertyType)
            => typeof (ImageCropDataSet);

        public override object ConvertSourceToInter(IPublishedElement owner, PublishedPropertyType propertyType, object source, bool preview)
        {
            var baseVal = base.ConvertSourceToInter(owner, propertyType, source, preview);
            var json = baseVal as JObject;
            if (json == null) return baseVal;

            var serializer = new JsonSerializer
            {
                Culture = CultureInfo.InvariantCulture,
                FloatParseHandling = FloatParseHandling.Decimal
            };

            //return the strongly typed model
            return json.ToObject<ImageCropDataSet>(serializer);
        }
    }
}
