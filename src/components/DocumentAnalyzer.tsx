import React from 'react';
import { motion } from 'motion/react';
import { Upload, FileText, Search, AlertCircle, Loader2 } from 'lucide-react';
import { analyzeComplianceDocument } from '../services/geminiService';

const DocumentAnalyzer: React.FC = () => {
  const [file, setFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);
  const [analysis, setAnalysis] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [prompt, setPrompt] = React.useState('Analyze this document for potential AML risks and compliance with international standards.');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const result = await analyzeComplianceDocument(file, prompt);
      setAnalysis(result);
    } catch (error) {
      console.error('Analysis failed:', error);
      setAnalysis('Analysis failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Compliance Document Analyzer</h2>
        <p className="text-slate-500 mt-2">Upload images of compliance documents or scenarios for AI-powered analysis.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Upload className="text-blue-600" size={20} />
              Upload Document
            </h3>
            
            <label className="relative group cursor-pointer block">
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center group-hover:border-blue-400 transition-colors">
                {preview ? (
                  <img src={preview} alt="Preview" className="max-h-64 mx-auto rounded-lg shadow-md" />
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                      <FileText className="text-blue-600" size={32} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-700">Click to upload or drag and drop</p>
                      <p className="text-sm text-slate-400 mt-1">PNG, JPG or JPEG (max. 10MB)</p>
                    </div>
                  </div>
                )}
              </div>
              <input type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
            </label>

            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-bold text-slate-700 mb-2 block">Analysis Prompt</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                  rows={3}
                />
              </div>
              <button
                onClick={handleAnalyze}
                disabled={!file || loading}
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Analyzing Document...
                  </>
                ) : (
                  <>
                    <Search size={20} />
                    Start AI Analysis
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 min-h-[400px] flex flex-col">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <AlertCircle className="text-blue-600" size={20} />
            Analysis Results
          </h3>
          
          {analysis ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 prose prose-slate max-w-none"
            >
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-slate-700 whitespace-pre-wrap">
                {analysis}
              </div>
            </motion.div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center text-slate-400">
              <FileText size={48} className="mb-4 opacity-20" />
              <p>Upload a document and click analyze to see the results here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocumentAnalyzer;
