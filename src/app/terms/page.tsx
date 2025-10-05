"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, FileText, UserCheck, CreditCard, Database, XCircle, Copyright, ShieldAlert, AlertTriangle, Scale, ExternalLink, Globe, RefreshCw, MapPin } from 'lucide-react';
import Link from 'next/link';
import TermsOfService from '@/component/pages/Terms';

interface FAQItem {
  question: string;
  answer: string;
}

interface Section {
  id: string;
  icon: React.ElementType;
  title: string;
  faqs: FAQItem[];
}

const page: React.FC = () => {
  return (
    <TermsOfService />
  );
};

export default page;
